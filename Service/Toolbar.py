from .Utils import plugin_loader

def GetToolbar(lang="zh_cn"):
    zh_cn='''
    <category name="逻辑" colour="#5c81a6"><block type="controls_if"></block><block type="logic_compare">
        <field name="OP">EQ</field>
    </block><block type="logic_operation">
        <field name="OP">AND</field>
    </block><block type="logic_negate"></block><block type="logic_boolean">
        <field name="BOOL">TRUE</field>
    </block><block type="logic_ternary"></block></category><category name="变量" colour="#A65C81" custom="VARIABLE"></category><category name="循环" colour="#5ca65c"><block type="controls_repeat_ext">
        <value name="TIMES">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block><block type="controls_whileUntil">
        <field name="MODE">WHILE</field>
    </block> <block type="controls_for">
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
    </block><block type="controls_forEach">
        <field name="VAR" id="b5eVE8Ryf8):C[z[f/Yr" variabletype="">j</field>
    </block><block type="controls_flow_statements">
        <field name="FLOW">BREAK</field>
    </block></category><category name="函数" colour="#9A5CA6" custom="PROCEDURE"></category><category name="数学模块" colour="#5C68A6"><block type="math_round">
        <field name="OP">ROUND</field>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">3.1</field>
            </shadow>
        </value>
    </block><block type="math_number">
        <field name="NUM">0</field>
    </block><block type="math_single">
        <field name="OP">ROOT</field>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">9</field>
            </shadow>
        </value>
    </block><block type="math_trig">
        <field name="OP">SIN</field>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">45</field>
            </shadow>
        </value>
    </block><block type="math_constant">
        <field name="CONSTANT">PI</field>
    </block><block type="math_number_property">
        <mutation divisor_input="false"></mutation>
        <field name="PROPERTY">EVEN</field>
        <value name="NUMBER_TO_CHECK">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block><block type="math_arithmetic">
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
    </block><block type="math_on_list">
        <mutation op="SUM"></mutation>
        <field name="OP">SUM</field>
    </block><block type="math_modulo">
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
    </block> <block type="math_constrain">
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
    </block><block type="math_random_int">
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
    </block><block type="math_random_float"></block><block type="str2num">
    </block><block type="str2int"></block>
    </category>
    <category name="字符串" colour="#5CA68D"><block type="text_charAt">
        <mutation at="true"></mutation>
        <field name="WHERE">FROM_START</field>
        <value name="VALUE">
            <block type="variables_get">
                <field name="VAR" id="v38~4fx:-J^EN;l?*]OO" variabletype="">text</field>
            </block>
        </value>
    </block><block type="text">
        <field name="TEXT"></field>
    </block><block type="text_append">
        <field name="VAR" id="C/%0VC0+D;;CStJ8*f]m" variabletype="">item</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT"></field>
            </shadow>
        </value>
    </block><block type="split">
    </block><block type="text_length">
        <value name="VALUE">
            <shadow type="text">
                <field name="TEXT">abc</field>
            </shadow>
        </value>
    </block><block type="text_isEmpty">
        <value name="VALUE">
            <shadow type="text">
                <field name="TEXT"></field>
            </shadow>
        </value>
    </block><block type="text_indexOf">
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
    </block><block type="text_join">
        <mutation items="2"></mutation>
    </block><block type="text_getSubstring">
        <mutation at1="true" at2="true"></mutation>
        <field name="WHERE1">FROM_START</field>
        <field name="WHERE2">FROM_START</field>
        <value name="STRING">
            <block type="variables_get">
                <field name="VAR" id="v38~4fx:-J^EN;l?*]OO" variabletype="">text</field>
            </block>
        </value>
    </block><block type="text_changeCase">
        <field name="CASE">UPPERCASE</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">abc</field>
            </shadow>
        </value>
    </block><block type="text_trim">
        <field name="MODE">BOTH</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">abc</field>
            </shadow>
        </value>
    </block><block type="text_print">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">abc</field>
            </shadow>
        </value>
    </block><block type="string_encode">
        <value name="string_encode">
            <shadow type="text">
                <field name="TEXT">abc</field>
            </shadow>
        </value>
    </block>
	<block type="string_decode">
    </block>
	<block type="b2h">
    </block><block type="text_prompt_ext">
        <mutation type="TEXT"></mutation>
        <field name="TYPE">TEXT</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">abc</field>
            </shadow>
        </value>
    </block><block type="chline"></block>
    <block type="an2cn">
        <value name="in_num">
            <shadow type="text">
                <field name="TEXT">123</field>
            </shadow>
        </value>
    </block>
	<block type="cn2an">
        <value name="in_cn">
            <shadow type="text">
                <field name="TEXT">一百二十三</field>
            </shadow>
        </value>
    </block>
    </category><category name="数组或元组" colour="#745CA6"><block type="lists_indexOf">
        <field name="END">FIRST</field>
        <value name="VALUE">
            <block type="variables_get">
                <field name="VAR" id="(whN,hJd|63h7A^+YPGw" variabletype="">list</field>
            </block>
        </value>
    </block><block type="lists_create_with">
        <mutation items="0"></mutation>
    </block><block type="lists_repeat">
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block><block type="lists_isEmpty"></block><block type="lists_create_with">
        <mutation items="3"></mutation>
    </block><block type="lists_getIndex">
        <mutation statement="false" at="true"></mutation>
        <field name="MODE">GET</field>
        <field name="WHERE">FROM_START</field>
        <value name="VALUE">
            <block type="variables_get">
                <field name="VAR" id="(whN,hJd|63h7A^+YPGw" variabletype="">list</field>
            </block>
        </value>
    </block><block type="lists_setIndex">
        <mutation at="true"></mutation>
        <field name="MODE">SET</field>
        <field name="WHERE">FROM_START</field>
        <value name="LIST">
            <block type="variables_get">
                <field name="VAR" id="(whN,hJd|63h7A^+YPGw" variabletype="">list</field>
            </block>
        </value>
    </block><block type="lists_getSublist">
        <mutation at1="true" at2="true"></mutation>
        <field name="WHERE1">FROM_START</field>
        <field name="WHERE2">FROM_START</field>
        <value name="LIST">
            <block type="variables_get">
                <field name="VAR" id="(whN,hJd|63h7A^+YPGw" variabletype="">list</field>
            </block>
        </value>
    </block><block type="lists_split">
        <mutation mode="SPLIT"></mutation>
        <field name="MODE">SPLIT</field>
        <value name="DELIM">
            <shadow type="text">
                <field name="TEXT">,</field>
            </shadow>
        </value>
    </block><block type="lists_sort">
        <field name="TYPE">NUMERIC</field>
        <field name="DIRECTION">1</field>
    </block><block type="lists_length"></block>
    </category>
    <category name="字典/CSV文件读取" colour="#00CFB0">
		<block type="dict_get"></block>
		<block type="dict_set"></block>
		<block type="emptydict"></block>
		<block type="csv2dict">
			<value name="NAME">
            <shadow type="text">
                <field name="TEXT">/home/pi/stock.csv</field>
            </shadow>
        </value>
		</block>
		<block type="savecsv">
			<value name="path">
            <shadow type="text">
                <field name="TEXT">/home/pi/stock.csv</field>
            </shadow>
        </value>
		</block>
	</category>
    <category name="颜色" colour="#A6745C"><block type="colour_picker">
        <field name="COLOUR">#ff0000</field>
    </block><block type="colour_random"></block><block type="colour_rgb">
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
    </block><block type="colour_blend">
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
    </block></category><category name="时间模块" colour="#7F5DA3"><block type="excapp_timer_time"></block><block type="excapp_timer_format"></block><block type="excapp_timer_sleep"></block></category><category name="读写" colour="#7f5da3"><block type="excapp_excapp_file_read"></block><block type="excapp_excapp_file_read_f"></block><block type="excapp_excapp_file_write"></block><block type="excapp_excapp_file_write_f"></block><block type="excapp_excapp_file_write_mode"></block><block type="serial"></block><block type="serial_write"></block><block type="serial_read"></block></category>
    <category name="语音" colour="#7F5DA3"><block type="excapp_ai_voice_asr">
        <value name="input_name">
            <shadow type="excapp_audio_input_device">
                <field name="input_name">4mic麦克风</field>
            </shadow>
        </value>
</block><block type="excapp_ai_voice_tts_init">
        
    </block><block type="excapp_ai_voice_tts">
        <value name="voice_name">
            <shadow type="excapp_ai_voice_tts_voice_name">
                <field name="voice_name">小燕</field>
            </shadow>
        </value>
        <value name="text">
            <shadow type="text">
                <field name="TEXT">您好呀!</field>
            </shadow>
        </value>
    </block><block type="excapp_audio_player"></block>
    <block type="doa"></block>
	<block type="doa_h"></block>
    </category><category name="语义解析" colour="#7F5DA3"><block type="excapp_aiui">
        <value name="appid">
            <shadow type="text">
                <field name="TEXT">5a571bb5</field>
            </shadow>
        </value>
        <value name="apikey">
            <shadow type="text">
                <field name="TEXT">cb2a2bcba41448a1a2f25eaa7b928a7d</field>
            </shadow>
        </value>
        <value name="text">
            <shadow type="text">
                <field name="TEXT">现在几点钟？</field>
            </shadow>
        </value>
        <value name="only_text">
            <shadow type="logic_boolean">
                <field name="ONLY_TEXT">False</field>
            </shadow>
        </value>
    </block><block type="translate">
        <value name="text">
            <shadow type="text">
                <field name="TEXT">Hello</field>
            </shadow>
        </value>
</block></category><category name="图像识别" colour="#9122ff">
<block type="qrscanner">
        <value name="timeout">
            <shadow type="math_number">
                <field name="NUM">15</field>
            </shadow>
        </value>
</block>
<block type="excapp_isface">
        <value name="imagepath">
            <shadow type="text">
                <field name="TEXT">/home/pi/testimg1.jpg</field>
            </shadow>
        </value>
    </block><block type="excapp_samepeople">
    <value name="imagepath1">
            <shadow type="text">
                <field name="TEXT">/home/pi/testimg1.jpg</field>
            </shadow>
        </value>
        <value name="imagepath2">
            <shadow type="text">
                <field name="TEXT">/home/pi/testimg1.jpg</field>
            </shadow>
        </value>
    </block><block type="excapp_shu">
        <value name="imagepath">
            <shadow type="text">
                <field name="TEXT">/home/pi/image/</field>
            </shadow>
        </value>
    </block><block type="ocr">
    <value name="apikey">
            <shadow type="text">
                <field name="TEXT">pWK6gNVnBvOWDStRjNLMGEBg</field>
            </shadow>
        </value>
    <value name="scretkey">
            <shadow type="text">
                <field name="TEXT">W6TXnRGG4SAQGDL1bLm6jDZFFXviYR5n</field>
            </shadow>
    </value>
<value name="path">
            <shadow type="text">
                <field name="TEXT">/home/pi/image/helloworld.jpg</field>
            </shadow>
    </value>
</block><block type="animalrec">
    <value name="apikey">
            <shadow type="text">
                <field name="TEXT">oAOmwfY73kZQegVNY3AP42n0</field>
            </shadow>
        </value>
    <value name="scretkey">
            <shadow type="text">
                <field name="TEXT">FAcu8t3zyFwdBmfYT7FahnUS57vGHKHB</field>
            </shadow>
    </value>
<value name="path">
            <shadow type="text">
                <field name="TEXT">/home/pi/image/helloworld.jpg</field>
            </shadow>
    </value>
</block><block type="smile">
    <value name="apikey">
            <shadow type="text">
                <field name="TEXT">iDvV8He8xvoyMBq5vHaj4fw9</field>
            </shadow>
        </value>
    <value name="scretkey">
            <shadow type="text">
                <field name="TEXT">GWigHPtIfkr7t1UMgE3yDU4dKMCW1kUX</field>
            </shadow>
    </value>
<value name="path">
            <shadow type="text">
                <field name="TEXT">/home/pi/image/helloworld.jpg</field>
            </shadow>
    </value>
</block></category>
<category name="正则表达式" colour="#0fff00">
<block type="re_match"></block>
<block type="re_search"></block>
<block type="re_spl"></block>
</category>
<category name="物联网" colour="#1ecae8"><block type="excapp_broadlink_init">
</block><block type="excapp_broadlink_config">
</block><block type="excapp_broadlink_temp">
</block><block type="learn_signal">
        <value name="brand">
            <shadow type="text">
                <field name="TEXT">未命名</field>
            </shadow>
        </value>
<value name="model">
            <shadow type="text">
                <field name="TEXT">未命名</field>
            </shadow>
        </value>
<value name="button">
            <shadow type="text">
                <field name="TEXT">未命名</field>
            </shadow>
        </value>
</block><block type="send_signal">
        <value name="brand">
            <shadow type="text">
                <field name="TEXT">未命名</field>
            </shadow>
        </value>
<value name="model">
            <shadow type="text">
                <field name="TEXT">未命名</field>
            </shadow>
        </value>
<value name="button">
            <shadow type="text">
                <field name="TEXT">未命名</field>
            </shadow>
        </value>
</block><block type="handcon">
        <value name="ip">
            <shadow type="text">
                <field name="TEXT">192.168.1.100</field>
            </shadow>
        </value>
<value name="mac">
            <shadow type="text">
                <field name="TEXT">00:0C:29:01:98:27</field>
            </shadow>
        </value>
</block><block type="bulb">
</block><block type="yeelightcolor">
        <value name="light_color">
            <shadow type="colour_picker">
                <field name="COLOUR">#ff0000</field>
            </shadow>
        </value>
</block><block type="plug">
</block></category><category name="微信接口" colour="#00ff40"><block type="wx_login">
</block><block type="wx_getfri">
</block><block type="wx_send">
</block><block type="wx_send_img">
</block>
<block type="wx_proc_msg">
</block><block type="wx_msgobj">
</block>
<block type="wx_msg_get_file">
</block>
<block type="wx_logout">
</block>
<block type="wx_join">
</block>
</category>
<category name="第三方驱动版" colour="#b4b4b4">
<category name="megaPi" colour="#b4b4b4"><block type="init_bot"></block><block type="encodermotormove">
<value name="port">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
</value>

<value name="speed">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
</value>
<value name="dis">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
</value>
</block><block type="ultrasonic">
<value name="portsonic">
            <shadow type="math_number">
                <field name="NUM">7</field>
            </shadow>
</value>
</block><block type="linefollow">
        <value name="port">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
</block><block type="servo">
        <value name="angle">
            <shadow type="math_number">
                <field name="NUM">30</field>
            </shadow>
        </value></block><block type="encodemotorrun">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value></block><block type="motorrun">
        <value name="port">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
<value name="speed">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
</block><block type="compass"></block><block type="melight"></block><block type="metemp"></block></category >
<category name="Arduino" colour="#ff0000">
<block type="arduino_init"></block>
<block type="arduino_setout"></block>
<block type="arduino_sethigh"><value name="pin">
            <shadow type="math_number">
                <field name="NUM">13</field>
            </shadow>
        </value></block>
<block type="arduino_setlow"><value name="pin">
            <shadow type="math_number">
                <field name="NUM">13</field>
            </shadow>
        </value></block>
		
<block type="arduino_ana_w"><value name="pin">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
		<value name="value">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value></block>
<block type="arduino_ana_r"><value name="pin">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
		</block>
<block type="arduino_dr"><value name="pin">
            <shadow type="math_number">
                <field name="NUM">13</field>
            </shadow>
        </value>
		</block>
</category>
</category>
<category name="机器学习" colour="#ff8000"><block type="new_trainer"></block><block type="add_face"></block><block type="dump_face">
<value name="path">
            <shadow type="text">
                <field name="TEXT">/root/Desktop</field>
            </shadow>
</value>
</block><block type="new_face_rec"></block><block type="load_face_model">
<value name="path">
            <shadow type="text">
                <field name="TEXT">/root/Desktop/face_model</field>
            </shadow>
        </value>
</block><block type="reco_face">
<value name="timeout">
            <shadow type="math_number">
                <field name="NUM">15</field>
            </shadow>
</value>
</block>
<block type="tfc_fc"></block>
<block type="tfc_ff">
	<value name="path">
            <shadow type="text">
                <field name="TEXT">/home/pi/image/cellphone.jpg</field>
            </shadow>
        </value>
</block>
</category>

<category name="MQTT" colour="#ffee00">
<block type="mqtt_spawn"></block>
<block type="mqtt_reg_msg"></block>
<block type="mqttmsg"></block>
<block type="mqtt_subscribe"></block>
<block type="mqtt_pub"></block>
<block type="mqtt_start"><value name="port">
            <shadow type="math_number">
                <field name="NUM">1883</field>
            </shadow>
        </value></block>
</category>
    '''

    zh_tw="""
    <category name="邏輯" colour="#5c81a6"><block type="controls_if"></block><block type="logic_compare">
        <field name="OP">EQ</field>
    </block><block type="logic_operation">
        <field name="OP">AND</field>
    </block><block type="logic_negate"></block><block type="logic_boolean">
        <field name="BOOL">TRUE</field>
    </block><block type="logic_ternary"></block></category><category name="變數" colour="#A65C81" custom="VARIABLE"></category><category name="迴圈" colour="#5ca65c"><block type="controls_repeat_ext">
        <value name="TIMES">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block><block type="controls_whileUntil">
        <field name="MODE">WHILE</field>
    </block> <block type="controls_for">
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
    </block><block type="controls_forEach">
        <field name="VAR" id="b5eVE8Ryf8):C[z[f/Yr" variabletype="">j</field>
    </block><block type="controls_flow_statements">
        <field name="FLOW">BREAK</field>
    </block></category><category name="函數" colour="#9A5CA6" custom="PROCEDURE"></category><category name="數學模組" colour="#5C68A6"><block type="math_round">
        <field name="OP">ROUND</field>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">3.1</field>
            </shadow>
        </value>
    </block><block type="math_number">
        <field name="NUM">0</field>
    </block><block type="math_single">
        <field name="OP">ROOT</field>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">9</field>
            </shadow>
        </value>
    </block><block type="math_trig">
        <field name="OP">SIN</field>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">45</field>
            </shadow>
        </value>
    </block><block type="math_constant">
        <field name="CONSTANT">PI</field>
    </block><block type="math_number_property">
        <mutation divisor_input="false"></mutation>
        <field name="PROPERTY">EVEN</field>
        <value name="NUMBER_TO_CHECK">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block><block type="math_arithmetic">
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
    </block><block type="math_on_list">
        <mutation op="SUM"></mutation>
        <field name="OP">SUM</field>
    </block><block type="math_modulo">
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
    </block> <block type="math_constrain">
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
    </block><block type="math_random_int">
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
    </block><block type="math_random_float"></block><block type="str2num"></block></category><category name="字串" colour="#5CA68D"><block type="text_charAt">
        <mutation at="true"></mutation>
        <field name="WHERE">FROM_START</field>
        <value name="VALUE">
            <block type="variables_get">
                <field name="VAR" id="v38~4fx:-J^EN;l?*]OO" variabletype="">text</field>
            </block>
        </value>
    </block><block type="text">
        <field name="TEXT"></field>
    </block><block type="text_append">
        <field name="VAR" id="C/%0VC0+D;;CStJ8*f]m" variabletype="">item</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT"></field>
            </shadow>
        </value>
    </block><block type="split">
    </block><block type="text_length">
        <value name="VALUE">
            <shadow type="text">
                <field name="TEXT">abc</field>
            </shadow>
        </value>
    </block><block type="text_isEmpty">
        <value name="VALUE">
            <shadow type="text">
                <field name="TEXT"></field>
            </shadow>
        </value>
    </block><block type="text_indexOf">
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
    </block><block type="text_join">
        <mutation items="2"></mutation>
    </block><block type="text_getSubstring">
        <mutation at1="true" at2="true"></mutation>
        <field name="WHERE1">FROM_START</field>
        <field name="WHERE2">FROM_START</field>
        <value name="STRING">
            <block type="variables_get">
                <field name="VAR" id="v38~4fx:-J^EN;l?*]OO" variabletype="">text</field>
            </block>
        </value>
    </block><block type="text_changeCase">
        <field name="CASE">UPPERCASE</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">abc</field>
            </shadow>
        </value>
    </block><block type="text_trim">
        <field name="MODE">BOTH</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">abc</field>
            </shadow>
        </value>
    </block><block type="text_print">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">abc</field>
            </shadow>
        </value>
    </block><block type="string_encode">
        <value name="string_encode">
            <shadow type="text">
                <field name="TEXT">abc</field>
            </shadow>
        </value>
    </block>
	<block type="string_decode">
    </block>
	<block type="b2h">
    </block><block type="text_prompt_ext">
        <mutation type="TEXT"></mutation>
        <field name="TYPE">TEXT</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">abc</field>
            </shadow>
        </value>
    </block><block type="chline"></block></category><category name="陣列或元組" colour="#745CA6"><block type="lists_indexOf">
        <field name="END">FIRST</field>
        <value name="VALUE">
            <block type="variables_get">
                <field name="VAR" id="(whN,hJd|63h7A^+YPGw" variabletype="">list</field>
            </block>
        </value>
    </block><block type="lists_create_with">
        <mutation items="0"></mutation>
    </block><block type="lists_repeat">
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block><block type="lists_isEmpty"></block><block type="lists_create_with">
        <mutation items="3"></mutation>
    </block><block type="lists_getIndex">
        <mutation statement="false" at="true"></mutation>
        <field name="MODE">GET</field>
        <field name="WHERE">FROM_START</field>
        <value name="VALUE">
            <block type="variables_get">
                <field name="VAR" id="(whN,hJd|63h7A^+YPGw" variabletype="">list</field>
            </block>
        </value>
    </block><block type="lists_setIndex">
        <mutation at="true"></mutation>
        <field name="MODE">SET</field>
        <field name="WHERE">FROM_START</field>
        <value name="LIST">
            <block type="variables_get">
                <field name="VAR" id="(whN,hJd|63h7A^+YPGw" variabletype="">list</field>
            </block>
        </value>
    </block><block type="lists_getSublist">
        <mutation at1="true" at2="true"></mutation>
        <field name="WHERE1">FROM_START</field>
        <field name="WHERE2">FROM_START</field>
        <value name="LIST">
            <block type="variables_get">
                <field name="VAR" id="(whN,hJd|63h7A^+YPGw" variabletype="">list</field>
            </block>
        </value>
    </block><block type="lists_split">
        <mutation mode="SPLIT"></mutation>
        <field name="MODE">SPLIT</field>
        <value name="DELIM">
            <shadow type="text">
                <field name="TEXT">,</field>
            </shadow>
        </value>
    </block><block type="lists_sort">
        <field name="TYPE">NUMERIC</field>
        <field name="DIRECTION">1</field>
    </block><block type="lists_length"></block></category><category name="顏色" colour="#A6745C"><block type="colour_picker">
        <field name="COLOUR">#ff0000</field>
    </block><block type="colour_random"></block><block type="colour_rgb">
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
    </block><block type="colour_blend">
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
    </block></category><category name="時間模組" colour="#7F5DA3"><block type="excapp_timer_time"></block><block type="excapp_timer_format"></block><block type="excapp_timer_sleep"></block></category><category name="讀寫" colour="#7f5da3"><block type="excapp_excapp_file_read"></block><block type="excapp_excapp_file_read_f"></block><block type="excapp_excapp_file_write"></block><block type="excapp_excapp_file_write_f"></block><block type="excapp_excapp_file_write_mode"></block><block type="serial"></block><block type="serial_write"></block><block type="serial_read"></block></category>
    <category name="語音" colour="#7F5DA3"><block type="excapp_ai_voice_asr">
        <value name="input_name">
            <shadow type="excapp_audio_input_device">
                <field name="input_name">4mic麥克風</field>
            </shadow>
        </value>
</block><block type="excapp_ai_voice_tts_init">
        
    </block><block type="excapp_ai_voice_tts">
        <value name="voice_name">
            <shadow type="excapp_ai_voice_tts_voice_name">
                <field name="voice_name">小燕</field>
            </shadow>
        </value>
        <value name="text">
            <shadow type="text">
                <field name="TEXT">您好呀!</field>
            </shadow>
        </value>
    </block><block type="excapp_audio_player"></block>
    <block type="doa"></block>
	<block type="doa_h"></block>
    </category><category name="語義解析" colour="#7F5DA3"><block type="excapp_aiui">
        <value name="appid">
            <shadow type="text">
                <field name="TEXT">5a571bb5</field>
            </shadow>
        </value>
        <value name="apikey">
            <shadow type="text">
                <field name="TEXT">cb2a2bcba41448a1a2f25eaa7b928a7d</field>
            </shadow>
        </value>
        <value name="text">
            <shadow type="text">
                <field name="TEXT">現在幾點鐘？</field>
            </shadow>
        </value>
        <value name="only_text">
            <shadow type="logic_boolean">
                <field name="ONLY_TEXT">False</field>
            </shadow>
        </value>
    </block><block type="translate">
        <value name="text">
            <shadow type="text">
                <field name="TEXT">Hello</field>
            </shadow>
        </value>
</block></category><category name="圖像識別" colour="#9122ff"><block type="excapp_isface">
        <value name="imagepath">
            <shadow type="text">
                <field name="TEXT">/home/pi/testimg1.jpg</field>
            </shadow>
        </value>
    </block><block type="excapp_samepeople">
    <value name="imagepath1">
            <shadow type="text">
                <field name="TEXT">/home/pi/testimg1.jpg</field>
            </shadow>
        </value>
        <value name="imagepath2">
            <shadow type="text">
                <field name="TEXT">/home/pi/testimg1.jpg</field>
            </shadow>
        </value>
    </block><block type="excapp_shu">
        <value name="imagepath">
            <shadow type="text">
                <field name="TEXT">/home/pi/image/</field>
            </shadow>
        </value>
    </block><block type="ocr">
    <value name="apikey">
            <shadow type="text">
                <field name="TEXT">pWK6gNVnBvOWDStRjNLMGEBg</field>
            </shadow>
        </value>
    <value name="scretkey">
            <shadow type="text">
                <field name="TEXT">W6TXnRGG4SAQGDL1bLm6jDZFFXviYR5n</field>
            </shadow>
    </value>
<value name="path">
            <shadow type="text">
                <field name="TEXT">/home/pi/image/helloworld.jpg</field>
            </shadow>
    </value>
</block><block type="animalrec">
    <value name="apikey">
            <shadow type="text">
                <field name="TEXT">oAOmwfY73kZQegVNY3AP42n0</field>
            </shadow>
        </value>
    <value name="scretkey">
            <shadow type="text">
                <field name="TEXT">FAcu8t3zyFwdBmfYT7FahnUS57vGHKHB</field>
            </shadow>
    </value>
<value name="path">
            <shadow type="text">
                <field name="TEXT">/home/pi/image/helloworld.jpg</field>
            </shadow>
    </value>
</block><block type="smile">
    <value name="apikey">
            <shadow type="text">
                <field name="TEXT">iDvV8He8xvoyMBq5vHaj4fw9</field>
            </shadow>
        </value>
    <value name="scretkey">
            <shadow type="text">
                <field name="TEXT">GWigHPtIfkr7t1UMgE3yDU4dKMCW1kUX</field>
            </shadow>
    </value>
<value name="path">
            <shadow type="text">
                <field name="TEXT">/home/pi/image/helloworld.jpg</field>
            </shadow>
    </value>
</block></category><category name="物聯網" colour="#1ecae8"><block type="excapp_broadlink_init">
</block><block type="excapp_broadlink_config">
</block><block type="excapp_broadlink_temp">
</block><block type="learn_signal">
        <value name="brand">
            <shadow type="text">
                <field name="TEXT">未命名</field>
            </shadow>
        </value>
<value name="model">
            <shadow type="text">
                <field name="TEXT">未命名</field>
            </shadow>
        </value>
<value name="button">
            <shadow type="text">
                <field name="TEXT">未命名</field>
            </shadow>
        </value>
</block><block type="send_signal">
        <value name="brand">
            <shadow type="text">
                <field name="TEXT">未命名</field>
            </shadow>
        </value>
<value name="model">
            <shadow type="text">
                <field name="TEXT">未命名</field>
            </shadow>
        </value>
<value name="button">
            <shadow type="text">
                <field name="TEXT">未命名</field>
            </shadow>
        </value>
</block><block type="handcon">
        <value name="ip">
            <shadow type="text">
                <field name="TEXT">192.168.1.100</field>
            </shadow>
        </value>
<value name="mac">
            <shadow type="text">
                <field name="TEXT">00:0C:29:01:98:27</field>
            </shadow>
        </value>
</block><block type="bulb">
</block><block type="yeelightcolor">
        <value name="light_color">
            <shadow type="colour_picker">
                <field name="COLOUR">#ff0000</field>
            </shadow>
        </value>
</block><block type="plug">
</block></category><category name="微信介面" colour="#00ff40"><block type="wx_login">
</block><block type="wx_getfri">
</block><block type="wx_send">
</block><block type="wx_send_img">
</block>
<block type="wx_proc_msg">
</block><block type="wx_msgobj">
</block>
<block type="wx_msg_get_file">
</block>
<block type="wx_logout">
</block>
<block type="wx_join">
</block>
</category><category name="megaPi" colour="#b4b4b4"><block type="init_bot"></block><block type="encodermotormove">
<value name="port">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
</value>

<value name="speed">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
</value>
<value name="dis">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
</value>
</block><block type="ultrasonic">
<value name="portsonic">
            <shadow type="math_number">
                <field name="NUM">7</field>
            </shadow>
</value>
</block><block type="linefollow">
        <value name="port">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
</block><block type="servo">
        <value name="angle">
            <shadow type="math_number">
                <field name="NUM">30</field>
            </shadow>
        </value></block><block type="encodemotorrun">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value></block><block type="motorrun">
        <value name="port">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
<value name="speed">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
</block><block type="compass"></block><block type="melight"></block><block type="metemp"></block></category >
<category name="機器學習" colour="#ff8000"><block type="new_trainer"></block><block type="add_face"></block><block type="dump_face">
<value name="path">
            <shadow type="text">
                <field name="TEXT">/root/Desktop</field>
            </shadow>
</value>
</block><block type="new_face_rec"></block><block type="load_face_model">
<value name="path">
            <shadow type="text">
                <field name="TEXT">/root/Desktop/face_model</field>
            </shadow>
        </value>
</block><block type="reco_face">
<value name="timeout">
            <shadow type="math_number">
                <field name="NUM">15</field>
            </shadow>
</value>
</block>
<block type="tfc_ff">
	<value name="path">
            <shadow type="text">
                <field name="TEXT">/home/pi/image/cellphone.jpg</field>
            </shadow>
        </value>
</block>
</category>
<category name="Arduino" colour="#ff0000">
<block type="arduino_init"></block>
<block type="arduino_setout"></block>
<block type="arduino_sethigh"><value name="pin">
            <shadow type="math_number">
                <field name="NUM">13</field>
            </shadow>
        </value></block>
<block type="arduino_setlow"><value name="pin">
            <shadow type="math_number">
                <field name="NUM">13</field>
            </shadow>
        </value></block>
		
<block type="arduino_ana_w"><value name="pin">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
		<value name="value">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value></block>
<block type="arduino_ana_r"><value name="pin">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
		</block>
<block type="arduino_dr"><value name="pin">
            <shadow type="math_number">
                <field name="NUM">13</field>
            </shadow>
        </value>
		</block>
</category>
<category name="MQTT" colour="#ffee00">
<block type="mqtt_spawn"></block>
<block type="mqtt_reg_msg"></block>
<block type="mqttmsg"></block>
<block type="mqtt_subscribe"></block>
<block type="mqtt_pub"></block>
<block type="mqtt_start"><value name="port">
            <shadow type="math_number">
                <field name="NUM">1883</field>
            </shadow>
        </value></block>
</category>
    """

    easier = "<category name=\"快速工具包\" colour=\"#5c81a6\">" \
             "<block type=\"ez_imgrec\">" \
             "<value name=\"delay\">" \
             "<shadow type=\"math_number\">" \
             "<field name=\"NUM\">10</field>" \
             "</shadow>" \
             "</value></block>" \
             "<block type=\"ifv2s\">" \
             "<value name=\"substr\">" \
             "<shadow type=\"text\"><field name=\"TEXT\">abc</field></shadow>" \
             "</value>" \
             "</block>" \
             "</category>"
    _, x = plugin_loader()
    if lang=="zh_tw":
        return zh_tw+easier+x
    else:
        return zh_cn+easier+x
