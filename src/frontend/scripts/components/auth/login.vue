<template lang="pug">
.login-container
    .columns
        .column.is-3
            .logo
                img(src="/images/qeng.png")
            .logo-title.title.is-size-4
                | سازمان نظام مهندسی ساختمان استان قزوین
            form.box.action
                .field
                    label.label نام کاربری
                    .control.has-icons-left
                        input.input(
                            type="email",
                            placeholder="e.g. JohnDoe",
                            required,
                            v-model="user.name"
                        )
                        span.icon.is-small.is-left
                            i.material-icons account_circle
                .field
                    label.label گذرواژه
                    .control.has-icons-left
                        input.input(
                            type="password",
                            placeholder="*******",
                            required,
                            v-model="user.password"
                        )
                        span.icon.is-small.is-left
                            i.material-icons vpn_key
                .field
                    button.button.is-success.is-medium(@click.prevent="userLogin") ورود
                span(v-html="notificationMessage")
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
    name: "Login",

    events: ["login-successfully", "login-failed"],

    /**
     * Setup
     */
    setup(props, { emit }) {
        const user = reactive({
            name: null,
            password: null,
        });

        /**
         * Login user
         */
        const userLogin = async (): Promise<boolean> => {
            const result = user.name == "admin" && user.password == "admin";

            if (result) {
                emit("login-successfully", user);
            } else {
                emit("login-failed", user);
            }

            return result;
        };

        return {
            user,
        };
    },
});
</script>
