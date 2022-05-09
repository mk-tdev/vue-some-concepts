<template>
  <TabWrapperContainer>
    <Tab title="Tab 1">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
        exercitationem officiis dolorum iste culpa praesentium explicabo
        adipisci veritatis. Saepe, odio rerum eum ex non esse ad laboriosam
        ratione mollitia officia iusto natus libero inventore dolorum quod porro
        veniam, rem corrupti quis aliquid. Beatae non assumenda, ea animi
        consectetur eveniet! Est?
      </div>
    </Tab>

    <Tab title="Tab 2">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        dolores nisi iure excepturi et eius mollitia fugiat magni, veniam quis
        voluptatem officiis tenetur autem debitis velit officia quasi quibusdam
        cupiditate obcaecati nobis modi iste? Illum placeat culpa illo quod enim
        ut aperiam vitae eaque facere doloremque. Itaque deleniti nobis odio
        officia commodi quisquam mollitia obcaecati consequuntur vel aliquam
        alias, architecto consequatur doloremque eveniet nihil harum unde
        inventore vero accusamus? Placeat odio sit quia ratione non laboriosam
        ipsa iusto, atque est, vitae fugiat doloremque nulla tempore, veritatis
        ea repellat totam necessitatibus iure. Cum, neque! Quo dolorum
        laboriosam ipsum optio architecto earum?
      </div>
    </Tab>

    <Tab title="Tab 3 Title">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
        exercitationem officiis dolorum iste culpa praesentium explicabo
        adipisci veritatis. Saepe, odio rerum eum ex non esse ad laboriosam
        ratione mollitia officia iusto natus libero inventore dolorum quod porro
        veniam, rem corrupti quis aliquid. Beatae non assumenda, ea animi
        consectetur eveniet! Est?
      </div>
    </Tab>
  </TabWrapperContainer>
</template>

<script>
import TabWrapperContainer from "./TabWrapperContainer.vue";
import Tab from "../components/Tab.vue";

export default {
  name: "TabViewContainer",
  components: {
    TabWrapperContainer,
    Tab,
  },
};
</script>

<style lang="css" scoped></style>
