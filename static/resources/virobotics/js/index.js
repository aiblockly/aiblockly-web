'use stract';

$(document).ready(function () {
    let height = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
    let workspaceHeight = height - 248;
    $('#blockly').css('height', workspaceHeight + 'px');
    $('#code').css('height', '24em');
    $('#status').css('height', '24em');
    let toolsBar = `
    <xml
        xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">
        <category name="${logic}" colour="#5C81A6">
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
        <category name="${loops}" colour="#5CA65C">
            <block type="time_sleep">
                <value name="sleeptime">
                    <block type="math_number">
                        <field name="NUM">0</field>
                    </block>
                </value>
            </block>
            <block type="controls_repeat_ext">
                <value name="TIMES">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="controls_whileUntil">
                <field name="MODE">WHILE</field>
            </block>
            <block type="controls_for">
                <field name="VAR" id=";y]8i=QJ6!ymzP??ry(M" variabletype="">i</field>
                <value name="FROM">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="TO">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
                <value name="BY">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="controls_forEach">
                <field name="VAR" id="b5eVE8Ryf8):C[z[f/Yr" variabletype="">j</field>
            </block>
            <block type="controls_flow_statements">
                <field name="FLOW">BREAK</field>
            </block>
        </category>
        <category name="${math}" colour="#5C68A6">
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
        <category name="${text}" colour="#5CA68D">
            <block type="text_charAt">
                <mutation at="true"></mutation>
                <field name="WHERE">FROM_START</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="v38~4fx:-J^EN;l?*]OO" variabletype="">text</field>
                    </block>
                </value>
            </block>
            <block type="text">
                <field name="TEXT"></field>
            </block>
            <block type="text_append">
                <field name="VAR" id="C/%0VC0+D;;CStJ8*f]m" variabletype="">item</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="text_length">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_isEmpty">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="text_indexOf">
                <field name="END">FIRST</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="v38~4fx:-J^EN;l?*]OO" variabletype="">text</field>
                    </block>
                </value>
                <value name="FIND">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_join">
                <mutation items="2"></mutation>
            </block>
            <block type="text_getSubstring">
                <mutation at1="true" at2="true"></mutation>
                <field name="WHERE1">FROM_START</field>
                <field name="WHERE2">FROM_START</field>
                <value name="STRING">
                    <block type="variables_get">
                        <field name="VAR" id="v38~4fx:-J^EN;l?*]OO" variabletype="">text</field>
                    </block>
                </value>
            </block>
            <block type="text_changeCase">
                <field name="CASE">UPPERCASE</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_trim">
                <field name="MODE">BOTH</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_print">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_prompt_ext">
                <mutation type="TEXT"></mutation>
                <field name="TYPE">TEXT</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
        </category>
        <category name="${lists}" colour="#745CA6">
            <block type="lists_indexOf">
                <field name="END">FIRST</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="(whN,hJd|63h7A^+YPGw" variabletype="">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_create_with">
                <mutation items="0"></mutation>
            </block>
            <block type="lists_repeat">
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">5</field>
                    </shadow>
                </value>
            </block>
            <block type="lists_length"></block>
            <block type="lists_isEmpty"></block>
            <block type="lists_create_with">
                <mutation items="3"></mutation>
            </block>
            <block type="lists_getIndex">
                <mutation statement="false" at="true"></mutation>
                <field name="MODE">GET</field>
                <field name="WHERE">FROM_START</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="(whN,hJd|63h7A^+YPGw" variabletype="">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_setIndex">
                <mutation at="true"></mutation>
                <field name="MODE">SET</field>
                <field name="WHERE">FROM_START</field>
                <value name="LIST">
                    <block type="variables_get">
                        <field name="VAR" id="(whN,hJd|63h7A^+YPGw" variabletype="">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_getSublist">
                <mutation at1="true" at2="true"></mutation>
                <field name="WHERE1">FROM_START</field>
                <field name="WHERE2">FROM_START</field>
                <value name="LIST">
                    <block type="variables_get">
                        <field name="VAR" id="(whN,hJd|63h7A^+YPGw" variabletype="">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_split">
                <mutation mode="SPLIT"></mutation>
                <field name="MODE">SPLIT</field>
                <value name="DELIM">
                    <shadow type="text">
                        <field name="TEXT">,</field>
                    </shadow>
                </value>
            </block>
            <block type="lists_sort">
                <field name="TYPE">NUMERIC</field>
                <field name="DIRECTION">1</field>
            </block>
        </category>
        <category name="${colour}" colour="#A6745C">
            <block type="colour_picker">
                <field name="COLOUR">#ff0000</field>
            </block>
            <block type="colour_random"></block>
            <block type="colour_rgb">
                <value name="RED">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
                <value name="GREEN">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="BLUE">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="colour_blend">
                <value name="COLOUR1">
                    <shadow type="colour_picker">
                        <field name="COLOUR">#ff0000</field>
                    </shadow>
                </value>
                <value name="COLOUR2">
                    <shadow type="colour_picker">
                        <field name="COLOUR">#3333ff</field>
                    </shadow>
                </value>
                <value name="RATIO">
                    <shadow type="math_number">
                        <field name="NUM">0.5</field>
                    </shadow>
                </value>
            </block>
        </category>
        <sep></sep>
        <category name="${variables}" colour="#A65C81" custom="VARIABLE"></category>
        <category name="${functions}" colour="#9A5CA6" custom="PROCEDURE"></category>
        <sep></sep>
        <category name="语音模块" colour="#7F5DA3">
            <category name="${excapp_asr}" colour="#7F5DA3">
                <block type="excapp_start"></block>
                <block type="excapp_asr"></block>
            </category>
            <category name="${excapp_tts}" colour="#7F5DA3">
                <block type="excapp_start"></block>
                <block type="excapp_tts_init"></block>
                <block type="excapp_tts"></block>
                <block type="excapp_play"></block>
            </category>
            <category name="AIUI" colour="#7F5DA3">
                <block type="excapp_aiui_init"></block>
                <block type="excapp_aiui"></block>
            </category>
        </category>
        <sep></sep>
        <category name="智能家居" colour="310">
            <block type="broadlink_discover">
                <value name="timeout">
                    <block type="math_number">
                        <field name="NUM">3</field>
                    </block>
                </value>
            </block>
            <block type="broadlink_auth"></block>
            <block type="broadlink_enter_learning"></block>
            <block type="broadlink_send_data"></block>
            <block type="broadlink_set_power"></block>
            <block type="broadlink_check_power"></block>
            <block type="broadlink_check_sensors"></block>
        </category>
        <category name="文件读写" colour="310">
            <block type="excapp_file_read"></block>
            <block type="excapp_file_read_f"></block>
            <block type="excapp_file_write"></block>
            <block type="excapp_file_write_f"></block>
            <block type="excapp_file_write_mode"></block>
        </category>
        <category name="NAO" colour="120">
            <block type="nao_Initial"></block>
            <category name="语音" colour="120">
                <category name="机器人说话" colour="120">
                    <block type="say">
                        <value name="stringToSay">
                            <block type="text">
                                <field name="TEXT"></field>
                            </block>
                        </value>
                    </block>
                    <block type="setLanguage2">
                        <value name="language">
                            <block type="text">
                                <field name="TEXT">Chinese</field>
                            </block>
                        </value>
                    </block>
                    <block type="setVolume">
                        <value name="volume">
                            <block type="math_number">
                                <field name="NUM">1.0</field>
                            </block>
                        </value>
                    </block>
                    <block type="stopAll"></block>
                </category>
                <category name="语音识别" colour="120">
                    <block type="setVocabulary">
                        <value name="enabledWordSpotting">
                            <block type="logic_boolean">
                                <field name="BOOL">False</field>
                            </block>
                        </value>
                    </block>
                    <block type="setLanguage">
                        <value name="languageName">
                            <block type="text">
                                <field name="TEXT"></field>
                            </block>
                        </value>
                    </block>
                    <block type="subscribe_1">
                        <value name="name">
                            <block type="text">
                                <field name="TEXT"></field>
                            </block>
                        </value>
                    </block>
                    <block type="unsubscribe_sr">
                        <value name="name">
                            <block type="text">
                                <field name="TEXT"></field>
                            </block>
                        </value>
                    </block>
                </category>
            </category>
            <category name="运动" colour="120">
                <category name="姿态控制" colour="120">
                    <block type="goToPosture">
                        <value name="postureName">
                            <block type="text">
                                <field name="TEXT">Crouch</field>
                            </block>
                        </value>
                        <value name="maxSpeedFraction">
                            <block type="math_number">
                                <field name="NUM">0.800000</field>
                            </block>
                        </value>
                    </block>
                    <block type="stopMove"></block>
                </category>
                <category name="运动控制" colour="120">
                    <block type="closeHand">
                        <value name="Hand">
                            <block type="text">
                                <field name="TEXT">RHand</field>
                            </block>
                        </value>
                    </block>
                    <block type="openHand">
                        <value name="Hand">
                            <block type="text">
                                <field name="TEXT">RHand</field>
                            </block>
                        </value>
                    </block>
                    <block type="rest"></block>
                    <block type="wakeUp"></block>
                    <block type="getAngles">
                        <value name="useSensors">
                            <block type="logic_boolean">
                                <field name="BOOL">False</field>
                            </block>
                        </value>
                    </block>
                    <block type="setAngles">
                        <value name="fractionMaxSpeed">
                            <block type="math_number">
                                <field name="NUM">0.000000</field>
                            </block>
                        </value>
                    </block>
                    <block type="move_1">
                        <value name="x">
                            <block type="math_number">
                                <field name="NUM">0.000000</field>
                            </block>
                        </value>
                        <value name="y">
                            <block type="math_number">
                                <field name="NUM">0.000000</field>
                            </block>
                        </value>
                        <value name="theta">
                            <block type="math_number">
                                <field name="NUM">0.000000</field>
                            </block>
                        </value>
                    </block>
                    <block type="moveTo_3">
                        <value name="x">
                            <block type="math_number">
                                <field name="NUM">0.000000</field>
                            </block>
                        </value>
                        <value name="y">
                            <block type="math_number">
                                <field name="NUM">0.000000</field>
                            </block>
                        </value>
                        <value name="theta">
                            <block type="math_number">
                                <field name="NUM">0.000000</field>
                            </block>
                        </value>
                    </block>
                </category>
            </category>
            <category name="视觉" colour="120">
                <category name="视觉设备" colour="120">
                    <block type="setActiveCamera_1">
                        <value name="activecamera">
                            <block type="math_number">
                                <field name="NUM">0</field>
                            </block>
                        </value>
                    </block>
                    <block type="subscribe">
                        <value name="gvmName">
                            <block type="text">
                                <field name="TEXT">0</field>
                            </block>
                        </value>
                        <value name="resolution">
                            <block type="math_number">
                                <field name="NUM">1</field>
                            </block>
                        </value>
                        <value name="colorSpace">
                            <block type="math_number">
                                <field name="NUM">11</field>
                            </block>
                        </value>
                        <value name="fps">
                            <block type="math_number">
                                <field name="NUM">10</field>
                            </block>
                        </value>
                    </block>
                    <block type="getImageRemote">
                        <value name="name">
                            <block type="text">
                                <field name="TEXT"></field>
                            </block>
                        </value>
                    </block>
                    <block type="unsubscribe">
                        <value name="nameId">
                            <block type="text">
                                <field name="TEXT"></field>
                            </block>
                        </value>
                    </block>
                </category>
                <category name="目标追踪" colour="120">
                    <block type="registerTarget_Face">
                        <value name="Width">
                            <block type="math_number">
                                <field name="NUM">0.100000</field>
                            </block>
                        </value>
                    </block>
                    <block type="registerTarget_RedBall">
                        <value name="diameter">
                            <block type="math_number">
                                <field name="NUM">0.08</field>
                            </block>
                        </value>
                    </block>
                    <block type="setMode">
                        <value name="Mode">
                            <block type="text">
                                <field name="TEXT">Head</field>
                            </block>
                        </value>
                    </block>
                    <block type="track">
                        <value name="Effector">
                            <block type="text">
                                <field name="TEXT">RedBall</field>
                            </block>
                        </value>
                    </block>
                    <block type="setExtractorPeriod">
                        <value name="Effector">
                            <block type="text">
                                <field name="TEXT">RedBall</field>
                            </block>
                        </value>
                        <value name="Period">
                            <block type="math_number">
                                <field name="NUM">5</field>
                            </block>
                        </value>
                    </block>
                    <block type="isNewTargetDetected"></block>
                    <block type="getTargetPosition">
                        <value name="frame">
                            <block type="math_number">
                                <field name="NUM">0</field>
                            </block>
                        </value>
                    </block>
                    <block type="stopTracker"></block>
                    <block type="unregisterAllTargets"></block>
                </category>
            </category>
            <category name="内存控制" colour="120">
                <block type="getData">
                    <value name="key">
                        <block type="text">
                            <field name="TEXT"></field>
                        </block>
                    </value>
                </block>
                <block type="getListData"></block>
                <block type="insertData">
                    <value name="key">
                        <block type="text">
                            <field name="TEXT"></field>
                        </block>
                    </value>
                    <value name="value">
                        <block type="math_number">
                            <field name="NUM">0</field>
                        </block>
                    </value>
                </block>
                <block type="insertListData"></block>
            </category>
        </category>
    </xml>
    `;
    // load workspace source
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
    let mouseUpLogic = function () {
        let prevCode = '';
        Blockly.Python.INFINITE_LOOP_TRAP = null;
        let code = Blockly.Python.workspaceToCode(workspace);
        if (prevCode != code && '' != code) {
            // init process bar
            $('#statusBar').removeClass('am-progress-bar-success');
            $('#statusBar').css('width', '0%');
            $('#statusBar').text('0%');
            $('#statusBar').parent().addClass('am-active');
            $('#statusBar').parent().attr('hidden', 'hidden');
            prevCode = code;
            $('#code').text(prevCode);
            //
            $('#export').removeAttr('disabled');
            //
            $('#clear').removeAttr('disabled');
        }
    };
    $('#blockly').on('mouseup', mouseUpLogic);
    //
    $('#clear').on('click', function () {
        $('#code').text('');
        $('#export').attr("disabled", "disabled");
        $('#clear').attr("disabled", "disabled");
    });
    //
    let runLogic = function () {
        $('#statusBar').parent().removeAttr('hidden');
        //
        let processStatus = 0;
        let processInterval = setInterval(function () {
            if (100 > processStatus) {
                $('#statusBar').css('width', processStatus + '%');
                $('#statusBar').text(processStatus + '%');
                processStatus++;
            }
        }, 100);
        //
        $('#run').attr('disabled', `disabled`);
        //
        $('#blockly').unbind('mouseup');
        //
        $.ajax({
            cache: false,
            data: {
                code: $('#code').text()
            },
            url: '/virobotics/run',
            type: 'POST',
            dataType: 'json',
            success: function (data) {
                $('#status').text(data.data);
                window.clearInterval(processInterval);
                //
                $('#statusBar').css('width', '100%');
                $('#statusBar').text('100%');
                $('#statusBar').addClass('am-progress-bar-success');
                $('#statusBar').parent().removeClass('am-active');
                //
                $("#run").removeAttr("disabled");
                //
                $('#blockly').on('mouseup', mouseUpLogic);
            }
        });
    };
    $('#run').on('click', runLogic);
    //
    let exportLogic = function () {
        let request = new XMLHttpRequest();
        request.open("POST", "/virobotics/export", true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        request.responseType = "arraybuffer";
        //
        $('#statusBar').parent().removeAttr('hidden');
        request.upload.onprogress = function (event) {
            if (event.lengthComputable) {
                let completedPercent = event.loaded / event.total * 100;
                $('#statusBar').css('width', completedPercent + '%');
                $('#statusBar').text(completedPercent + '%');
                if (100 == completedPercent) {
                    $('#statusBar').css('width', '100%');
                    $('#statusBar').text('100%');
                    $('#statusBar').addClass('am-progress-bar-success');
                    $('#statusBar').parent().removeClass('am-active');
                }
            }
        };
        request.onreadystatechange = function () {
            if (4 === request.readyState && 200 === request.status) {
                let name = request.getResponseHeader("Content-disposition");
                let filename = name.substring(20, name.length);
                let blob = new Blob([request.response], {type: 'text/py'});
                let csvUrl = URL.createObjectURL(blob);
                let link = document.createElement('a');
                link.href = csvUrl;
                link.download = filename;
                link.click();
            }
        };
        let code = $('#code').text();
        request.send(`code=${code}`);
    };
    $('#export').on('click', exportLogic);

    let exportWorkspace = function () {
        let xml = Blockly.Xml.workspaceToDom(workspace);
        let xml_text = Blockly.Xml.domToText(xml);

        let request = new XMLHttpRequest();
        request.open("POST", "/virobotics/exportworkspace", true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        request.responseType = "arraybuffer";
        //
        $('#statusBar').parent().removeAttr('hidden');
        request.upload.onprogress = function (event) {
            if (event.lengthComputable) {
                let completedPercent = event.loaded / event.total * 100;
                $('#statusBar').css('width', completedPercent + '%');
                $('#statusBar').text(completedPercent + '%');
                if (100 == completedPercent) {
                    $('#statusBar').css('width', '100%');
                    $('#statusBar').text('100%');
                    $('#statusBar').addClass('am-progress-bar-success');
                    $('#statusBar').parent().removeClass('am-active');
                }
            }
        };
        request.onreadystatechange = function () {
            if (4 === request.readyState && 200 === request.status) {
                let name = request.getResponseHeader("Content-disposition");
                let filename = name.substring(20, name.length);
                let blob = new Blob([request.response], {type: 'text/xml'});
                let csvUrl = URL.createObjectURL(blob);
                let link = document.createElement('a');
                link.href = csvUrl;
                link.download = filename;
                link.click();
            }
        };
        request.send(`xml=${xml_text}`);
    };

    $("#exportWorkspace").on("click", exportWorkspace);

    $("#importWorkspace").on("click", function () {
        AMUI.dialog.alert({
            title: '导入 workspace.xml 文件',
            content: '<div class="am-form-group am-form-file">\n' +
            '  <button type="button" class="am-btn am-btn-danger am-btn-sm">\n' +
            '    <i class="am-icon-cloud-upload"></i> 选择要上传的文件</button>\n' +
            '  <input id="workspace-file" type="file" multiple name="uploadFile">\n' +
            '</div>\n' +
            '<div id="file-list"></div>',
            onConfirm: function () {
                let input = document.querySelector("#workspace-file");
                if (input.files.length === 0) {
                    console.log("未选择文件");
                    return;
                }

                let formData = new FormData();
                formData.append("file", input.files[0]);

                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        let xml = Blockly.Xml.textToDom(xhr.responseText);
                        Blockly.Xml.domToWorkspace(xml, workspace);
                    }
                };

                xhr.open("POST", "/virobotics/importworkspace");
                xhr.send(formData);
            }
        });
        $('#workspace-file').on('change', function () {
            let fileNames = '';
            $.each(this.files, function () {
                fileNames += '<span class="am-badge">' + this.name + '</span> ';
            });
            $('#file-list').html(fileNames);
        });
    });
})
;