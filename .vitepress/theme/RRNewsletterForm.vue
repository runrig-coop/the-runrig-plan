<script setup>
</script>

<template>
  <form
    action="https://buttondown.email/api/emails/embed-subscribe/runrig"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://buttondown.email/runrig', 'popupwindow')"
    class="embeddable-buttondown-form"
  >
    <label for="bd-email">Enter your email</label>
    <input
      type="email"
      name="email"
      id="bd-email"
      placeholder="eg, joe@pieinthesky.net"
      aria-placeholder="eg, joe@pieinthesky.net"/>
    <input type="submit" value="Subscribe" class="rr-brand medium" />
    <p>
      <a href="https://buttondown.email" target="_blank">Powered by Buttondown.</a>
    </p>
  </form>
</template>

<style>
.embeddable-buttondown-form input {
  margin-bottom: 2em;
}

.embeddable-buttondown-form input[type="email"] {
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 0 10px 0 12px;
  width: 100%;
  height: 40px;
  background-color: var(--vp-c-bg-alt);
}

.embeddable-buttondown-form input[type="submit"] {
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
}
.embeddable-buttondown-form input[type="submit"].medium {
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
}
.embeddable-buttondown-form input[type="submit"].big {
  border-radius: 24px;
  padding: 0 24px;
  line-height: 46px;
  font-size: 16px;
}
.embeddable-buttondown-form input[type="submit"]:active {
  transition: color 0.1s, border-color 0.1s, background-color 0.1s;
}
.embeddable-buttondown-form input[type="submit"].rr-brand {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}
.embeddable-buttondown-form input[type="submit"].rr-brand:hover {
  border-color: var(--vp-button-brand-hover-border);
  color: var(--vp-button-brand-hover-text);
  background-color: var(--vp-button-brand-hover-bg);
}
.embeddable-buttondown-form input[type="submit"].rr-brand:active {
  border-color: var(--vp-button-brand-active-border);
  color: var(--vp-button-brand-active-text);
  background-color: var(--vp-button-brand-active-bg);
}

</style>