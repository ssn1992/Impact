import { Bar } from 'vue-chartjs'

export default {
    mixins: [Bar],
    props: ['barData'],

    watch: {
        'barData': {
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
                        this.renderChart(this.barData, this.options)
                    }
                } else {
                    this.renderChart(this.barData, this.options)
                }
            }
        }
    },

    mounted () {
        this.renderChart(this.barData, this.options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    gridLines: {
                        display:true
                    },
                    ticks: {
                        beginAtZero: true
                    },
                    barPercentage: 1
                }],
                yAxes: [{
                    gridLines: {
                        display:true
                    }
                }]
            },
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
                                scale_max = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
                            ctx.fillStyle = '#444';
                            var y_pos = model.y - 5;
                            // Make sure data value does not get overflown and hidden
                            // when the bar's value is too close to max value of scale
                            // Note: The y value is reverse, it counts from top down
                            if ((scale_max - model.y) / scale_max >= 0.93)
                                y_pos = model.y + 20;
                            ctx.fillText(dataset.data[i], model.x, y_pos);
                        }
                    });
                }
            }
        })
    }
}