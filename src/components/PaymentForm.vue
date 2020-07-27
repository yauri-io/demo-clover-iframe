<script>


// we put this outside intentionally
// feel free to put it inside methods
const handleInput = function (event) {
    console.log("input handler event", event);
};

const styles = {
    'card-number input': {
        'width': '100%',
        'font-size': '20px',
        'line-height': '24px',
        'height': '40px',
        'border': '1px gray solid',
        'padding': '3px 5px'
    },
    'img.brand': {
        'padding-top': '5px',
        'padding-right': '5px'
    }
};

export default {
    name: "PaymentForm",
    data() {
        return {
            apiKey: "demoApiKey",
            cardNumber: null,
            clover: null,
            loading: true
        };
    },
    mounted() {
        console.info("Clover form mounted");
        this._loadScript();
    },
    methods: {
        // load Clover eCommerce SDK
        _loadScript() {
            //  do not load the script if it's already loaded
            if (window.Clover) {
                console.log('Clover script already loaded');
                return this._setupForm();
            }

            const script = document.createElement("script");
            script.src = "https://checkout.sandbox.dev.clover.com/sdk.js";
            script.type = "text/javascript";
            script.onload = () => {
                this._setupForm();
            };
            script.onerror = err => {
                console.log("load script error", err);
            };
            document.body.appendChild(script);
        },
        // setup form
        _setupForm() {
            /* eslint-disable no-undef */
            this.clover = new Clover(this.apiKey);
            this.elements = this.clover.elements();
            this.cardNumber = this.elements.create("CARD_NUMBER", styles);

            // set event listener for card number input
            this.cardNumber.addEventListener("change", handleInput);

            this.loading = false;
            this.cardNumber.mount("#card-number");
        }
    },
    beforeUnmount() {
        console.info("Clover form before destroy, we remove the card input listener");
        // remove event listener for card number input
        this.cardNumber.removeEventListener("change", handleInput);
    }
}
</script>

<template>
    <div v-if="loading">Loading form</div>
    <div style="height: 60px">
        <div id="card-number" style="margin: 10px 0 0;"></div>
    </div>
    <div>
        Please open browser console to see the log from input event
    </div>
</template>

<style>
.clover-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px 0 !important;
}
</style>
