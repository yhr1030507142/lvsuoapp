<template>
    <div>
    <!-- <button @click="getPdf()">pdf</button>
      <button @click="getDoc()">doc</button>
      <button v-print="'#pdfDom'">打印</button> -->
    <div style="width:90%;margin:auto;padding-bottom:20px" ref="div" id="pdfDom">
        <div class="flex first" style="text-align: right;color:#000000;">({{todayTime}}[1])穗金鹏民字第[2]号</div>
        <p class="title11" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">民 事 委 托 代 理</strong></p>
        <p class="height" ></p>
        <p class="height" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">合</strong></p>
        <p class="height"></p>
        <p class="height" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">同</strong></p>
        <p class="height"></p>
        <p class="height" style="text-align: center;"><strong style="font-size: 24pt;font-family:仿宋_GB2312;color:#000000;">书</strong></p>
        <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
        <!-- <div class="input1 flex" style="text-align: center;"> -->
        <p style="width:80%;margin:auto;">
			<strong style="font-size:36upx;width:30%;text-align:left;display:inline-block;color:#000000;">
				聘请方:
			</strong>
				<span style="text-align:center;font-weight:600;color:#000000;font-size:28upx;border-bottom: 2px solid #000000;width: 70%;display:inline-block">
					{{Aname}}
				</span></p>
        <!-- </div> -->
         <div class="height"></div>
                 <p style="width: 80%;margin: auto;">
	<strong style=" width: 30%;text-align: left;display:inline-block;color:#000000;font-size:36upx;">受聘聘方:</strong>
	<span style="text-align:center;font-weight:600;color:#000000;font-size:28upx;border-bottom: 2px solid #000000;width: 70%;display:inline-block">
		{{laywerName}}
	</span></p>
         <!-- <div class="input1 flex" style="text-align: center;">
            <p class="input1-p"><strong style="font-size: 14.0pt;
    font-family: 仿宋_GB2312;
    letter-spacing: .1pt;">受聘聘方:</strong></p><span class="input1-input" style="font-size: 14pt;font-family:仿宋_GB2312;">{{laywerName}}</span>
        </div> -->
        <p class=MsoNormal align=right style='text-align:right;line-height:22.0pt;
            mso-line-height-rule:exactly'><span lang=EN-US style='font-size:14.0pt;
            font-family:仿宋_GB2312;letter-spacing:.1pt'></span></p>
        <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
         <div class="height"></div>
        <div class="height"></div>
        <div class="height"></div>
<div class="WordSection1" style="layout-grid: 15.6pt;width:90%;margin:auto;">
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong style="mso-bidi-font-weight: normal;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">甲方（聘请方）：<span class="row-span" id="Aname" style="mso-spacerun: yes;" v-html="Aname" ></span> </span></strong></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">法定代表人： </span><span class="row-span" id="Aleader"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">地址： </span><span class="row-span" id="Aaddress"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">电话：<span class="row-span" id="Atel"></span> 传真:<span class="row-span" id="Afax"></span> 邮编 ：<span class="" id="Acode"></span></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>

<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong style="mso-bidi-font-weight: normal;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">乙方（受聘方）</span></strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">：</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; mso-hansi-font-family: 宋体;" id="Bname"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">地址： </span><span class="row-span" id="Baddress"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">电话：<span class="row-span" id="Btel"></span> 传真:<span class="row-span" id="Bfax"></span> 邮编 ：<span class="" id="Bcode"></span></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">甲方因<u><span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp; </span><strong style="mso-bidi-font-weight: normal;"><span style="mso-spacerun: yes;" id="text"></span></strong><span style="mso-spacerun: yes;">&nbsp; </span></span></u>纠纷一案，根据中华人民共和国《合同法》、《民事诉讼法》、《仲裁法》和《律师法》等有关法律法规的规定，聘请乙方的律师作为委托代理人。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">甲乙双方按照诚实信用原则，经协商一致，订立此合同，共同遵守。</span></p>
<p class="MsoNormal" style="text-indent: 28.4pt; mso-char-indent-count: 2.0; line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span></strong><strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">第一条<span lang="EN-US"><span style="mso-spacerun: yes;font-size: 28upx;">&nbsp; </span></span>委托代理事项</span></strong></p>
<p class="MsoNormal" style="text-indent: 28.4pt; mso-char-indent-count: 2.0; line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">乙方接受甲方委托，委派律师在下列案件中担任甲方的委托代理人：</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span>1</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">、对方当事人名称或者姓名： </span><span id="toName" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span>2</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">、案由： </span><span id="tocasWhy" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span>3</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">、受理机关： </span><span id="toCompony" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp; </span><span style="mso-spacerun: yes;">&nbsp;&nbsp;</span>4</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">、涉及标的： </span><span id="shejibiaode" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span></strong><strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">第二条<span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp; </span></span>委托代理权限</span></strong></p>
<p class="MsoNormal" style="text-indent: 28.4pt; mso-char-indent-count: 2.0; line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">一般代理，包括：进行调解或者和解；提起上诉；参加二审庭审<span lang="EN-US">;</span>签署、送达、接受法律文书。</span></p>
<p class="MsoNormal" style="text-indent: 28.4pt; mso-char-indent-count: 2.0; line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; mso-hansi-font-family: 宋体;">全权代理，包括：<span lang="EN-US">1</span>、调查取证；<span lang="EN-US">2</span>、提起诉讼；<span lang="EN-US">3</span>、提出答辩；<span lang="EN-US">4</span>、代为变更或者放弃诉讼请求；<span lang="EN-US">5</span>、代为承认诉讼请求；<span lang="EN-US">6</span>、提起反诉；<span lang="EN-US">7</span>、进行调解或者和解；<span lang="EN-US">8</span>、提起上诉；<span lang="EN-US">9</span>、申请执行；<span lang="EN-US">10</span>、收取或者收转执行标的；<span lang="EN-US">11</span>、签署、送达、接受法律文书。）</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span></strong><strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">第三条<span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp; </span></span>乙方的义务</span></strong></p>
<p class="MsoNormal" style="text-indent: 29.25pt; line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（一）乙方委派<u> <strong style="mso-bidi-font-weight: normal;"><span lang="EN-US">&nbsp;&nbsp;<span style="mso-spacerun: yes;" id="text1"></span>&nbsp;&nbsp;</span></strong><span lang="EN-US"></span></u>律师作为上述案件中甲方的委托代理人，甲方同意上述律师指派其他律师助理配合完成辅助工作，</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; color: red;">在合同履行期间，若前述委派律师因故不能履行委托人职责的（包括但不限于停止执业、转换执业机构等），乙方应另行委派其他律师完成委托事项或由双方协商解决处理。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（二）乙方律师应当充分运用自己的专业知识和技能，尽心尽职地根据法律、法规的规定完成本合同约定的被委托事项，最大限度地维护委托人的合法权益；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（三）乙方律师应当遵循诚实守信的原则，依据法律、法规的规定做出专业判断，客观地告知甲方所委托事项可能出现的法律风险；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（四）乙方律师应当根据法律规定的时限、时效以及审理机关的要求，及时提交证据，按时出庭，及时办理受委托的事务；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（五）乙方律师应当及时告知委托人有关代理工作的情况，对委托人了解委托事项情况的正当要求，应当尽快给予答复；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（六）乙方在代理甲方案件期间，在涉及甲方的对抗性案件中，未经甲方事先书面同意，不得委派律师同时担任与甲方具有利益冲突的另一方的委托代理人；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（七）乙方律师对其获知的甲方的商业秘密负有保密责任，非由法律规定或者甲方同意，不得向任何第三方披露；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（八）乙方对甲方业务应当单独建档，对涉及甲方的原始证据、法律文件和财物应当妥善保管，设立交接记录。档案保存时间根据律师业务档案管理规定执行。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span></strong><strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">第四条<span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp; </span></span>甲方的义务</span></strong></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（一）甲方应当真实、详尽和及时地向乙方律师叙述案情，提供与委托代理事项有关的全部证据、文件及其它事实材料，并对证据材料的真实性、合法性负责，若甲方隐瞒证据、伪造证据，因此出现的一切后果由甲方自行承担；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（二）甲方应当积极、主动地配合乙方律师的工作，甲方对乙方律师提出的要求应当明确、合理、合法；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（三）甲方应当按本合同规定的时间和金额向乙方支付律师代理费和工作费用；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（四）甲方指定<u><span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp; </span><strong style="mso-bidi-font-weight: normal;"><span style="mso-spacerun: yes;" id="text2"></span></strong><span style="mso-spacerun: yes;">&nbsp;&nbsp;</span></span></u>为与乙方律师联系的联系人，负责转达甲方的指示和要求，提供文件和资料等，甲方更换联系人应当书面通知委托代理人：</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（五）乙方尊重甲方对委托代理事项做出的独立的判断和决策。但甲方非根据乙方律师提供的法律意见、建议、方案所做出的决定而导致的损失，由甲方自行承担。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp; </span><strong><span style="mso-spacerun: yes;">&nbsp;</span></strong></span><strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">第五条<span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp; </span></span>律师代理费和工作费用</span></strong></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">经双方协商同意，甲方向乙方支付律师代理费人民币<u><span lang="EN-US">&nbsp;&nbsp;<span style="mso-spacerun: yes;" id="text3"></span>&nbsp;&nbsp;</span></u>元整，如本案最终胜诉<span lang="EN-US">,</span>甲方还需于二审判决生效后五日内向乙方支付胜诉额的<u><span lang="EN-US">&nbsp;&nbsp;<span style="mso-spacerun: yes;" id="text4"> </span>&nbsp;&nbsp;</span></u><span lang="EN-US">%</span>作为风险律师费。</span></p>
<p class="MsoNormal" style="text-indent: 28.4pt; mso-char-indent-count: 2.0; line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">乙方律师办理甲方委托代理事项所发生的工作费用和差旅费用由甲方承担，共计人民币<u><span lang="EN-US">&nbsp;&nbsp;<span style="mso-spacerun: yes;" id="text5"> </span>&nbsp;&nbsp;</span></u>元。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;" id="fuwuneirong"></span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span></strong><strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">第六条</span></strong><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp; </span></span><strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; mso-hansi-font-family: 宋体;">支付时间、地点</span></strong></p>
<p class="MsoNormal" style="text-indent: 28.0pt; mso-char-indent-count: 2.0; line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; mso-hansi-font-family: 宋体;">律师费及工作费用、差旅费用应于本协议签定之日给付，至迟不超过本协议签定后<u><span lang="EN-US">&nbsp;<span style="mso-spacerun: yes;" id="text6"> </span>&nbsp;</span></u>日内给付（如遇法定节假日时，可顺延至法定节假日后的第一天）。</span></p>
<p class="MsoNormal" style="text-indent: 28.0pt; mso-char-indent-count: 2.0; line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; mso-hansi-font-family: 宋体;">乙方户名：广州金鹏律师事务所</span></p>
<p class="MsoNormal" style="text-indent: 28.0pt; mso-char-indent-count: 2.0; line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; mso-hansi-font-family: 宋体;">开户行：</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">招商银行股份有限公司广州盈隆广场支行</span></p>
<p class="MsoNormal" style="text-indent: 27.45pt; mso-char-indent-count: 1.96; line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; mso-hansi-font-family: 宋体;">账号：</span><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">1209 0600 7010 903</span></p>
<p class="MsoNormal" style="text-indent: 27.45pt; mso-char-indent-count: 1.96; line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; mso-hansi-font-family: 宋体;">以上收费以到达上述账号并取得乙方发票为收讫。任何私人间的支付，乙方均不予承认。</span></p>
<p class="MsoNormal" style="text-indent: 27.45pt; mso-char-indent-count: 1.96; line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; mso-hansi-font-family: 宋体;">甲方逾期支付律师费或工作费用，乙方有权解除合同或暂停工作直至甲方交纳全部约定费用时止。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span></strong><strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">第七条<span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp; </span></span>合同的变更和解除</span></strong></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（一）甲乙双方经协商同意，可以变更或者解除本合同。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（二）因甲方追加委托事项或因增加诉讼当事人，当事人一方提出反诉、反请求等重大诉讼事件导致代理事项明显增多的情况时，乙方有权增加律师代理费。甲方应当合理地追加。否则，乙方仅在原委托范围内工作。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（三）甲方明确放弃委托事项，可以要求变更合同，甲乙双方合理确定律师收费。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（四）乙方有下列情形之一的，甲方有权解除合同：</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span>1</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">、未经甲方同意，擅自更换代理律师的；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span>2</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">、因乙方律师工作延误、失职导致甲方蒙受损失的；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span>3</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">、违反第三条第<span lang="EN-US">6</span>&mdash;<span lang="EN-US">8</span>项规定的义务之一的。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（五）甲方有下列情形之一的，乙方有权解除合同或暂停工作直致甲方自行纠正时止：</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span>1</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">、甲方的委托事项违反法律或者违反律师执业规范的；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span>2</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">、甲方有捏造事实、伪造证据或者隐瞒重要情节等情形的；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span>3</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">、甲方逾期<u> &nbsp;<strong style="mso-bidi-font-weight: normal;" id="text10"></strong> &nbsp;</u>日仍不向乙方支付律师代理费或者工作费用的。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span></strong><strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">第八条<span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp; </span></span>违约责任</span></strong></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（一）乙方无正当理由不提供第一条、第二条规定的法律服务或者违反第三条规定的义务，甲方有权要求乙方退还部分或者全部已付的律师费。但甲方不得以如下理由要求乙方退费：</span></p>
<p class="MsoNormal" style="text-indent: 28.4pt; mso-char-indent-count: 2.0; line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">1</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">、甲方单方面又委托其他律师事务所的律师代理的；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span>2</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">、乙方接受委托后，甲方以乙方收费过高为由要求退费的；</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span>3</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">、甲方作为被告时，乙方律师已经为出庭作好准备，而原告方撤诉的：</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span>4</span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">、其他非因乙方或者乙方律师的原因，甲方不合理的单方解除合同的。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（二）乙方律师因工作延误、失职或者违反第三条第<span lang="EN-US">6</span>一<span lang="EN-US">8</span>项规定的义务之一，导致甲方蒙受重大经济损失，乙方应当通过已投保的律师执业责任保险向甲方承担赔偿责任。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">（三）甲方无正当理由不支付律师代理费或者工作费用，或者不合理的单方解除合同，乙方有权要求甲方支付未付的律师代理费、未报销的工作费用以及延期支付的利息。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span></strong><strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">第九条<span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp; </span></span>争议的解决</span></strong></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">本合同适用中华人民共和国《合同法》、《律师法》、《民事诉讼法》、《仲裁法》等法律。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">甲乙双方如果发生争议，应当友好协商解决。如协商不成，任何一方均有权将争议提交口人民法院广州仲裁委员会，按照提交仲裁时该会现行有效的仲裁规则进行仲裁，仲裁裁决是终局的，对甲乙双方均有约束力。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span></strong><strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">第十条<span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp; </span></span>合同的生效</span></strong></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">本合同正本一式叁份，甲乙双方各执一份，壹份存卷，本合同由甲乙双方代表签字并加盖公章，自<span lang="EN-US">&nbsp;&nbsp;<span style="mso-spacerun: yes;" id="text7"></span><span style="mso-spacerun: yes;">&nbsp; </span></span>年<span lang="EN-US">&nbsp;&nbsp;<span style="mso-spacerun: yes;" id="text8"> </span><span style="mso-spacerun: yes;">&nbsp; </span></span>月<span lang="EN-US">&nbsp;&nbsp;<span style="mso-spacerun: yes;" id="text9"></span><span style="mso-spacerun: yes;">&nbsp; </span></span>日之日起生效，至乙方律师完成本项目法律服务或双方解除本合同时止。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span></strong><strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">第十一条<span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp; </span></span>通知和送达</span></strong></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">甲乙双方因履行本合同而相互发出或者提供的所有通知、文件、资料，均以扉页所列明的地址、传真送达，一方如果迁址或者变更电话，应当书面通知对方。</span></p>
<p class="MsoNormal" style="text-indent: 28.5pt; line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">当面交付文件的，在交付之时视为送达；通过传真方式的，在发出传真时视为送达；以邮寄方式的，挂号寄出或者投邮当日视为送达。</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><strong><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;"><span style="mso-spacerun: yes;">&nbsp;&nbsp;&nbsp; </span></span></strong><strong><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">第十二条<span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp; </span></span>其他特别约定</span></strong></p>
<p class="MsoNormal" style="text-indent: 28.4pt; mso-char-indent-count: 2.0; line-height: 23.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">《委托人须知》为本合同附件，甲方确认签署本协议前，乙方已明确告知《委托人须知》中所提示的内容，甲方对《委托人须知》的内容已充分了解。</span></p>
<p class="MsoNormal" style="text-indent: 28.5pt; line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>

 <div class="MsoNormal row flex1" style="line-height: 23.0pt; mso-line-height-rule: exactly;">
    
    <p class="col-flex">
        <span class="" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">       
        <span>
        <span class="row-span" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">甲方: <span></span></span>
        <span class="row-span" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">代表: <span></span></span>
        <span class="row-span" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">日期:   
            &nbsp;<span id="text12"></span>&nbsp;年
            &nbsp;<span id="text13"></span>&nbsp;月
            &nbsp;<span id="text14"></span>&nbsp;日
        </span>
        </span>
        </span>
    </p>
   
     <p class="col-flex">
        <span class="" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">       
        <span>
        <span class="row-span" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">乙方: <span></span></span>
        <span class="row-span" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">代表: <span></span></span>
        <span class="row-span" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">日期:   
            &nbsp;<span id="text15"></span>&nbsp;年
            &nbsp;<span id="text16"></span>&nbsp;月
            &nbsp;<span id="text17"></span>&nbsp;日
        </span>
        </span>
        </span>
    </p>
</div>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 23.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312; letter-spacing: .1pt;">&nbsp;</span></p>
<p class="MsoNormal" style="text-align: center; line-height: 21.0pt; mso-line-height-rule: exactly;" align="center"><strong style="mso-bidi-font-weight: normal;"><span style="font-size: 22.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">委</span></strong> <strong style="mso-bidi-font-weight: normal;"><span style="font-size: 22.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">托</span></strong> <strong style="mso-bidi-font-weight: normal;"><span style="font-size: 22.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">人</span></strong> <strong style="mso-bidi-font-weight: normal;"><span style="font-size: 22.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">须</span></strong> <strong style="mso-bidi-font-weight: normal;"><span style="font-size: 22.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">知</span></strong></p>
<p class="MsoNormal" style="text-indent: 28.5pt; line-height: 21.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-family: 仿宋_GB2312;">&nbsp;</span></p>
<p class="MsoNormal" style="text-indent: 28.5pt; line-height: 21.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312;">为了保障委托人、律师事务所及律师各方的合法权益，依据《中华人民共和国律师法》及《律师职业道德和执业纪律规范》的有关规定，我所告知委托人如下事项：</span></p>
<p class="MsoNormal" style="text-indent: 28.5pt; line-height: 21.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312;">一、律师执业必须遵守宪法和法律，恪守律师职业道德和执业纪律。律师执业必须以事实为依据，以法律为准绳。</span></p>
<p class="MsoNormal" style="text-indent: 28.5pt; line-height: 21.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312;">二、律师不得以与经办案件的法官、仲裁员、检察官、侦查人员或他们的上级相熟为理由或为前提承接委托人案件，亦不得以保证委托人案件必然胜诉或无罪为前提承接委托人的案件。</span></p>
<p class="MsoNormal" style="text-indent: 28.5pt; line-height: 21.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312;">委托人不得要求律师通过非正常途径与经办法官、仲裁员、检察官、侦查人员或他们的上级沟通。</span></p>
<p class="MsoNormal" style="text-indent: 28.5pt; line-height: 21.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312;">三、委托人的案件具有法律风险，委托人的主张及律师的法律意见部分或全部有不被采纳的可能，委托人的案件部分或全部有败诉的可能。</span></p>
<p class="MsoNormal" style="text-indent: 28.5pt; line-height: 21.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312;">四、委托人应当真实、客观、全面、及时地向承办律师介绍案件，提供与委托代理事项有关的证据、文件及其他实材料。</span></p>
<p class="MsoNormal" style="text-indent: 28.5pt; line-height: 21.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312;">五、律师办案的进程受到侦查、检察、审判、仲裁等机构及相关当事方的制约。</span></p>
<p class="MsoNormal" style="text-indent: 28.5pt; line-height: 21.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312;">六、律师承办业务，须由律师事务所与委托人签订书面委托合同，按有关规定收取律师费，并向委托人统一开具正式发票。律师不得私自接受委托，私自向委托人收取费用，收受委托人财物。</span></p>
<p class="MsoNormal" style="text-indent: 28.5pt; line-height: 21.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312;">七、委托人应当按照委托合同的约定，按时、足额支付律师费。</span></p>
<p class="MsoNormal" style="text-indent: 28.5pt; line-height: 21.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312;">八、承办律师在接受委托后，有违反《律师法》及《律师职业道德和执业纪律规范》有关规定行为的，委托人可以向承办律师所在律师事务所、律师协会及司法行政部门投诉。</span></p>
<p class="MsoNormal" style="text-indent: 27.45pt; mso-char-indent-count: 1.96; line-height: 21.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312;">委托人确认：</span></p>
<p class="MsoNormal" style="text-indent: 27.45pt; mso-char-indent-count: 1.96; line-height: 21.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312;">律师已告知我上述事项，我方已了解告知书中所提示的内容。</span></p>
<p class="MsoNormal" style="margin-left: 182.8pt; mso-para-margin-left: 17.41gd; text-indent: 116.5pt; mso-char-indent-count: 8.32; line-height: 21.0pt; mso-line-height-rule: exactly;"><span lang="EN-US" style="font-size: 14.0pt; font-family: 仿宋_GB2312;">&nbsp;</span></p>
<p class="MsoNormal" style="margin-left: 0; mso-para-margin-left: 17.41gd; text-indent: 51.1pt; mso-char-indent-count: 3.65; line-height: 21.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312;">委托人签署：</span> <span id="custom_name"></span></p>
<p class="MsoNormal" style="margin-left:0; mso-para-margin-left: 17.41gd; text-indent: 96.2pt; mso-char-indent-count: 6.87; line-height: 21.0pt; mso-line-height-rule: exactly;"><span style="font-size: 14.0pt; font-family: 仿宋_GB2312;"><span id="text18" style="margin-left: 20upx;"></span>&nbsp;&nbsp;年<span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp;</span>&nbsp;</span><span id="text19" style="margin-left: 20upx;"></span>&nbsp;&nbsp;月<span lang="EN-US"><span style="mso-spacerun: yes;">&nbsp;</span></span>&nbsp;<span id="text20" style="margin-left: 20upx;"></span>&nbsp;&nbsp;日</span></p>
    </div>
      </div>      
</div>
</template>
<script>
// import { setTimeout } from 'timers';
//  import saveAs from 'file-saver'
//  import '../../../static/js/jquery.wordexport';
export default {
   
    data(){
        return{
            //聘请方
            htmlTitle: '合同模板PDF',
            name:'',
            //受聘
            laywerName:'广州金鹏律师事务所',
            div:'',
            //甲方
            Aname:"",
            Aleader:"",
            Aaddress:"",
            Atel:"",
            Afax:'',
            Acode:'',
            //乙方
            Bname:'广州金鹏律师事务所',
            Baddress:'广东省广州市天河区兴民路222号之三天盈广场东塔45楼',
            Btel:'(020)38390333',
            Bfax:'(020)38390218',
            Bcode:'510623',
            //
            text:"",
            text1:'',
            text2:"",
            // 第五条
            text3:'',
            text4:'',
            text5:'',
          
            text6:'',
            //日期
            text7:'',
            text8:'',
            text9:'',
            //逾期
            text10:'十',
            text11:'',
            //日期
            text12:'',
            text13:'',
            text14:'',
            text15:'',
            text16:'',
            text17:'',
           
           text18:'',
            text19:'',
            text20:'',
            custom_name:'',
            data:'',
                //逾期几日
            todayTime:'',
            toName:'',
            tocaseWhy:'',
            tocaseCompony:'',
            shejibiaode:'',
			dataWord:[],
        }
    },
       
    onLoad(option){
		var _self =  this
		uni.request({
			url:_self.$api+'Index/Case_Details',
			data:{Id:option.Id,Type_Id:option.Charging_Method},
			success:function(res){
				console.log(res)
				_self.dataWord = res.data
				_self.getData()
				},
			})
		// this.dataWord = option.dataWord
  //       console.log(this.dataWord)

    },
    methods:{
          getDoc(){
                console.log('***************')
                 $('#pdfDom').wordExport('生成文档')
            },
        getData(){
						var _self =this
                        var date=new Date;
                        var year=date.getFullYear(); 
                        _self.todayTime=  year    
                        var month = date.getMonth()+1
                        var day = date.getDate()  
                        document.getElementById('text7').innerText =  year
                        document.getElementById('text8').innerText = month 
                        document.getElementById('text9').innerText = day    

                       
                         document.getElementById('text').innerText = _self.dataWord.Get_Case_Information.Case_Name
                         document.getElementById('Aname').innerText = _self.dataWord.Get_Customer_Information.Customer_Name_Zh
							_self.Aname =  _self.dataWord.Get_Customer_Information.Customer_Name_Zh
                         document.getElementById('Aleader').innerText = _self.dataWord.Get_Customer_Information.Customer_Name_Zh
                         document.getElementById('Aaddress').innerText = _self.dataWord.Get_Customer_Information.Detailed_Address
                         document.getElementById('Atel').innerText = _self.dataWord.Get_Customer_Information.Contact_Party
                         document.getElementById('Afax').innerText = ''
                         document.getElementById('Acode').innerText = '' 
                           
        
                         document.getElementById('Bname').innerText = '广州金鹏律师事务所'
                         document.getElementById('Baddress').innerText = '广东省广州市天河区兴民路222号之三天盈广场东塔45楼'
                         document.getElementById('Btel').innerText = '(020)38390333'
                         document.getElementById('Bfax').innerText = '(020)38390218'
                         document.getElementById('Bcode').innerText = '510623'


                        document.getElementById('toName').innerText = _self.dataWord.Get_Case_Information.Party_Name
                        document.getElementById('tocasWhy').innerText = _self.dataWord.Get_Case_Information.Cause_Action
                        document.getElementById('toCompony').innerText = _self.dataWord.Get_Case_Information.Receiving_Organ
                        document.getElementById('shejibiaode').innerText = _self.dataWord.Get_Case_Information.Target
                      

                       var arr1 = []; 
                        for(var i =0;i< _self.dataWord.Get_Lawyer_Information.length;i++){
                            arr1.push(_self.dataWord.Get_Lawyer_Information[i].Rule_Name)
                        }
                        var index=arr1.indexOf('主办律师')
                        var text1 = _self.dataWord.Get_Lawyer_Information[index].Staff_Name
                        document.getElementById('text1').innerText = text1
                        
                         document.getElementById('text2').innerText = _self.dataWord.Get_Case_Information.Party_Name
                         document.getElementById('fuwuneirong').innerText = _self.dataWord.Get_Case_Information.Service_Content.replace(/<[^>]+>|&[^>]+;/g,"").trim();
         
                       
        },
    },
    components:{
      
        
    },
    watch:{
    dataWord:function(newValue,oldValue){
    this.getData();
    }
    }

}
</script>
<style scoped>
body{
     font-family:楷体_GB2312;
}
.row{
    flex-direction: row
}
span{
    color: #000000;
}
.flex1{
    display: flex;
    justify-content: space-between;
}
.height{
    height:100upx;
    text-align: center;
     font-size:18upx;
      font-family:楷体_GB2312;
      font-weight: 600
}
.title11{
    text-align: center;
    font-size:18upx;
    margin-top: 16upx;
    font-family:楷体_GB2312;
    font-weight: 600
}
.first{
    justify-content: flex-end;
}
.input1{
    justify-content: center;
    width:80%;
    margin: auto;
}
.input1-p{
    font-size:36upx;
    font-family:楷体_GB2312;
    font-weight: 600;
    margin-right: 20upx;
    width: 200upx;
    text-align: left;
}
.input1-input{
    color: #000000;
    border:none;
    border-bottom: 2px solid #000;
    /* flex: 1; */
    display: inline-block;
    /* width: 515px; */
    text-align: center;
    font-size: 24upx;
    letter-spacing:8px;
}
.MsoNormal{
    /* display: flex;
    flex-direction: row; */
}
.row-span{
    /* min-width: 200px; */
    display: inline-block;
    font-size:28upx; 
    border-bottom: 1px solid #00000;
	min-width: 100upx;
}
.col-flex{
    display: flex;
    flex-direction: column;
    /* min-width: 300px; */
}
.WordSection1{

}

</style>


