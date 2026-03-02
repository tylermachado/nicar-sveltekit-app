<script>
  import { LayerCake, ScaledSvg, Html, takeEvery } from "layercake";
  import { scaleBand } from "d3-scale";
  import Column from "$components/layercake/Column.svelte";
  import AxisX from "$components/layercake/AxisX.percent-range.html.svelte";
  import AxisY from "$components/layercake/AxisY.percent-range.html.svelte";

  // Context
  import { getContext } from "svelte";
  const getFilteredBreeds = getContext('filteredBreeds');
  const getAllBreeds = getContext('allBreeds');
  let filteredBreeds = $derived(getFilteredBreeds?.() || getAllBreeds() || []);

  // Filtered data
  let dataCountries = $derived(Object.entries(
    filteredBreeds.reduce((acc, obj) => {
      const value = obj.origin;
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {}),
  )
    .map(([option, instances]) => ({ option, instances }))
    .filter((item) => item.instances > 1));

  let dataSpan = $derived(Object.entries(
    filteredBreeds.reduce((acc, obj) => {
      const value = obj.life_span;
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {}),
  )
    .map(([option, instances]) => ({ option, instances }))
    .filter((item) => item.instances > 1));

  let dataWeights = $derived(Object.entries(
    filteredBreeds.reduce((acc, obj) => {
      const value = obj.weight.imperial;
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {}),
  )
    .map(([option, instances]) => ({ option, instances }))
    .filter((item) => item.instances > 1));
</script>

<div class="w-full justify-between items-center max-w-2xl mx-auto">
  <h2 class="mb-4">Cats by Country of Origin</h2>
  <div class="chart-container mb-16">
    <LayerCake
      ssr
      percentRange
      position="absolute"
      padding={{ top: 0, right: 0, bottom: 20, left: 20 }}
      x="option"
      y="instances"
      xScale={scaleBand().paddingInner(0.028).round(true)}
      xDomain={dataCountries.map((item) => item.option)}
      yDomain={[0, 30]}
      data={dataCountries}
    >
      <Html>
        <AxisX gridlines baseline />
        <AxisY gridlines={false} tickMarks />
      </Html>
      <ScaledSvg>
        <Column />
      </ScaledSvg>
    </LayerCake>
  </div>

  <h2 class="mb-4">Cats by Lifespan, in Years</h2>
  <div class="chart-container mb-16">
    <LayerCake
      ssr
      percentRange
      position="absolute"
      padding={{ top: 0, right: 0, bottom: 20, left: 20 }}
      x="option"
      y="instances"
      xScale={scaleBand().paddingInner(0.028).round(false)}
      xDomain={dataSpan
        .map((item) => item.option)
        .sort((a, b) => {
          const [aLow, aHigh] = a.split(' - ').map(Number);
          const [bLow, bHigh] = b.split(' - ').map(Number);
          if (aLow !== bLow) {
            return aLow - bLow;
          }
          return aHigh - bHigh; 
        })
      }
      yDomain={[0, 15]}
      data={dataSpan}
    >
      <Html>
        <AxisX gridlines baseline />
        <AxisY gridlines={false} tickMarks />
      </Html>
      <ScaledSvg>
        <Column />
      </ScaledSvg>
    </LayerCake>
  </div>

  <h2 class="mb-4">Cats by Weight Class, in Pounds</h2>
  <div class="chart-container mb-16">
    <LayerCake
      ssr
      percentRange
      position="absolute"
      padding={{ top: 0, right: 0, bottom: 20, left: 20 }}
      x="option"
      y="instances"
      xScale={scaleBand().paddingInner(0.028).round(false)}
      xDomain={dataWeights
        .map((item) => item.option)
        .sort((a, b) => {
          const [aLow, aHigh] = a.split(' - ').map(Number);
          const [bLow, bHigh] = b.split(' - ').map(Number);
          if (aLow !== bLow) {
            return aLow - bLow;
          }
          return aHigh - bHigh; 
        })
      }
      yDomain={[0, 15]}
      data={dataWeights}
    >
      <Html>
        <AxisX gridlines baseline />
        <AxisY gridlines={false} tickMarks />
      </Html>
      <ScaledSvg>
        <Column />
      </ScaledSvg>
    </LayerCake>
  </div>
</div>

<style>
  .chart-container {
    position: relative;
    width: 100%;
    height: 250px;
  }
</style>
