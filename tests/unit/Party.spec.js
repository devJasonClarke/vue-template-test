import { shallowMount } from "@vue/test-utils";
import Party from "@/components/Party.vue";

describe("Party.vue", () => {
  it("Contains the word party", () => {
    const wrapper = shallowMount(Party);
    expect(wrapper.text()).toContain("Party");
  });
});
