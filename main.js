Vue.component('options-table', {
	props: ['specs', 'optionfilter'],
	template: `

	<table>
			<thead>
				<tr>
					<td>Instrument name</td>
					<td>Option type</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(spec,index) in specs" v-if="spec.kind == 'option' && spec.optionType == optionfilter">
				<th>{{ spec.instrumentName }}</th>
				<th>{{ spec.optionType }}</th>
			</tr>
			</tbody>
		</table>

	`
});

var demo = new Vue({
	el: "#app",
	data() {
		return {
      specs: null
    };
	},
	mounted() {
    axios
      .get('https://www.deribit.com/api/v1/public/getinstruments')
      .then(response => (this.specs = response.data.result));
  }  
});
