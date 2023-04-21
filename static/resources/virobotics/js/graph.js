'use strict';


$(document).ready(function (e) {
    //
    let toolsBar = `
        <xml
            xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">
            <category name="逻辑" colour="#5C81A6">
                <block type="controls_if"></block>
                <block type="logic_compare">
                    <field name="OP">EQ</field>
                </block>
                <block type="logic_operation">
                    <field name="OP">AND</field>
                </block>
                <block type="logic_negate"></block>
                <block type="logic_boolean">
                    <field name="BOOL">TRUE</field>
                </block>
                <block type="logic_null"></block>
                <block type="logic_ternary"></block>
            </category>
            <category name="数学" colour="#5C68A6">
                <block type="excapp_function_y"></block>
                <block type="excapp_function_x"></block>
                <block type="math_round">
                    <field name="OP">ROUND</field>
                    <value name="NUM">
                        <shadow type="math_number">
                            <field name="NUM">3.1</field>
                        </shadow>
                    </value>
                </block>
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
                <block type="math_single">
                    <field name="OP">ROOT</field>
                    <value name="NUM">
                        <shadow type="math_number">
                            <field name="NUM">9</field>
                        </shadow>
                    </value>
                </block>
                <block type="math_trig">
                    <field name="OP">SIN</field>
                    <value name="NUM">
                        <shadow type="math_number">
                            <field name="NUM">45</field>
                        </shadow>
                    </value>
                </block>
                <block type="math_constant">
                    <field name="CONSTANT">PI</field>
                </block>
                <block type="math_number_property">
                    <mutation divisor_input="false"></mutation>
                    <field name="PROPERTY">EVEN</field>
                    <value name="NUMBER_TO_CHECK">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
                <block type="math_arithmetic">
                    <field name="OP">ADD</field>
                    <value name="A">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                    <value name="B">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>
                <block type="math_on_list">
                    <mutation op="SUM"></mutation>
                    <field name="OP">SUM</field>
                </block>
                <block type="math_modulo">
                    <value name="DIVIDEND">
                        <shadow type="math_number">
                            <field name="NUM">64</field>
                        </shadow>
                    </value>
                    <value name="DIVISOR">
                        <shadow type="math_number">
                            <field name="NUM">10</field>
                        </shadow>
                    </value>
                </block>
                <block type="math_constrain">
                    <value name="VALUE">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                    <value name="LOW">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                    <value name="HIGH">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>
                <block type="math_random_int">
                    <value name="FROM">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                    <value name="TO">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>
                <block type="math_random_float"></block>
            </category>
            <sep></sep>
            <category name="变量" colour="#A65C81" custom="VARIABLE"></category>
        </xml>
        `;
    //
    let workspace = Blockly.inject('blockly',
        {
            media: '/resources/common/blockly/media/',
            toolbox: toolsBar,
            zoom: {
                controls: true,
                wheel: true,
                startScale: 1.0,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2
            },
            trashcan: true
        });
    //
    let testFunction = function () {
        let formula = Blockly.JavaScript.workspaceToCode(workspace);
        formula = formula.substring(formula.indexOf('y = '));
        formula = formula.substring(0, formula.indexOf(';'));
        console.log(formula);
        let y;
        let data = [];
        for (let x = -180.0; x <= 180; x += 1) {
            try {
                eval(formula);
            } catch (e) {
                y = NaN;
            }
            if (!isNaN(y)) {
                // Prevent y from being displayed inconsistently, some in decimals, some
                // in scientific notation, often when y has accumulated rounding errors.
                x = Math.round(x * Math.pow(10, 14)) / Math.pow(10, 14);
                y = Math.round(y * Math.pow(10, 14)) / Math.pow(10, 14);
                data.push([x, y]);
            }
        }
        console.log(data);
        // 基于准备好的dom，初始化echarts实例
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('echarts'));
        // 指定图表的配置项和数据
        let option = {
            title: {
                text: '函数: ' + formula,
                left: '45%',
                textStyle: {
                    align: 'center',
                    verticalAlign: 'middle'
                }
            },
            legend: {
                data: [{
                    name: formula
                }]
            },
            grid: {
                show: true,
                containLabel: true
            },
            xAxis: {
                type: 'value',
                name: 'x'
            },
            yAxis: {
                type: 'value',
                name: 'y'
            },
            axisPointer: {
                show: true,
                type: 'line',
                snap: true
            },
            series: [{
                type: 'line',
                smooth: true,
                smoothMonotone: 'none',
                data: data,
                markLine: {
                    label: formula
                }
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    };
    $('#run').on('click', testFunction);
});