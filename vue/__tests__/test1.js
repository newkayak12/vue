import annyon from "@/components/annyon";
import Test1 from "@/components/test/Test1";
import Test2 from "@/components/test/Test2";
import testUtil from '@vue/test-utils'

describe("annyon",  ()=>{
    it("$JestTest가 false이면 버튼이 보이지 않는다.",  ()=>{
        const wrapper = testUtil.mount(annyon);
        expect(wrapper.find("button").isVisible()).toBe(false)
    })

    test("$JestTest가 true이면 버튼이 보인다. ", async ()=>{
        const wrapper = testUtil.mount(annyon);
        wrapper.setData({
            $JestTest:true,
        })

        await wrapper.vm.$nextTick();
        expect(wrapper.find('button').isVisible()).toBe(true)
    });



})
