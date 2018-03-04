import { Doughnut } from 'vue-chartjs'

export default {
    mixins: [Doughnut],
    props: ['doughnutData'],

    watch: {
        'doughnutData': {
            handler (newData, oldData) {
                if (oldData) {
                    let chart = this._chart

                    // Get new and old DataSet Labels
                    let newDatasetLabels = newData.datasets.map((dataset) => {
                        return dataset.label
                    })

                    let oldDatasetLabels = oldData.datasets.map((dataset) => {
                        return dataset.label
                    })

                    // Stringify 'em for easier compare
                    const oldLabels = JSON.stringify(oldDatasetLabels)
                    const newLabels = JSON.stringify(newDatasetLabels)

                    // Check if Labels are equal and if dataset length is equal
                    if (newLabels === oldLabels && oldData.datasets.length === newData.datasets.length) {
                        newData.datasets.forEach((dataset, i) => {
                            // Get new and old dataset keys
                            const oldDatasetKeys = Object.keys(oldData.datasets[i])
                            const newDatasetKeys = Object.keys(dataset)

                            // Get keys that aren't present in the new data
                            const deletionKeys = oldDatasetKeys.filter((key) => {
                                return key !== '_meta' && newDatasetKeys.indexOf(key) === -1
                            })

                            // Remove outdated key-value pairs
                            deletionKeys.forEach((deletionKey) => {
                                delete chart.data.datasets[i][deletionKey]
                            })

                            // Update attributes individually to avoid re-rendering the entire chart
                            for (const attribute in dataset) {
                                if (dataset.hasOwnProperty(attribute)) {
                                    chart.data.datasets[i][attribute] = dataset[attribute]
                                }
                            }
                        })

                        if (newData.hasOwnProperty('labels')) {
                            chart.data.labels = newData.labels
                        }
                        if (newData.hasOwnProperty('xLabels')) {
                            chart.data.xLabels = newData.xLabels
                        }
                        if (newData.hasOwnProperty('yLabels')) {
                            chart.data.yLabels = newData.yLabels
                        }
                        chart.update()
                    } else {
                        chart.destroy()
                        this.renderChart(this.doughnutData, this.options)
                    }
                } else {
                    this.renderChart(this.doughnutData, this.options)
                }
            }
        }
    },

    mounted () {
        this.renderChart(this.doughnutData, this.options = {
            responsive: true,
            maintainAspectRatio: false,
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            animation: {
                duration: 500,
                easing: "easeOutQuart",
                onComplete: function () {
                    var ctx = this.chart.ctx;
                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';

                    this.data.datasets.forEach(function (dataset) {

                        for (var i = 0; i < dataset.data.length; i++) {
                            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                                mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
                                start_angle = model.startAngle,
                                end_angle = model.endAngle,
                                mid_angle = start_angle + (end_angle - start_angle)/2;

                            var x = mid_radius * Math.cos(mid_angle);
                            var y = mid_radius * Math.sin(mid_angle);

                            ctx.fillStyle = '#444';
                            var percent = String(Math.round(dataset.data[i]/total*100)) + "%";
                            ctx.fillText(dataset.data[i], model.x + x, model.y + y);
                            // Display percent in another line, line break doesn't work for fillText
                            ctx.fillText(percent, model.x + x, model.y + y + 15);
                        }
                    });
                }
            }
        })
    }
}