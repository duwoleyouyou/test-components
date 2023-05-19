import { defineComponent as l, openBlock as a, createElementBlock as i, renderSlot as r } from "vue";
const d = ["disabled"], u = {
  name: "TestButton"
}, e = /* @__PURE__ */ l({
  ...u,
  props: {
    testString: {},
    disabled: { type: Boolean }
  },
  emits: ["save"],
  setup(t, { emit: n }) {
    const s = t, c = () => {
      n("save", s.testString);
    };
    return (o, f) => (a(), i("button", {
      disabled: o.disabled,
      class: "test",
      onClick: c
    }, [
      r(o.$slots, "default")
    ], 8, d));
  }
});
e.install = function(t) {
  return console.log(e, "button"), t.component(e.name, e), t;
};
const m = [e], p = function(t) {
  m.forEach((n) => {
    t.use(n);
  });
}, b = {
  install: p
};
export {
  e as Button,
  b as default
};
