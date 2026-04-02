// ===== ANIMAÇÕES SVG — 100% LOCAL, SEM DEPENDÊNCIA EXTERNA =====

const SVGS = {
  "bench": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="130" width="170" height="11" rx="4" fill="#1e1e1e"/>
    <rect x="38" y="141" width="14" height="26" rx="3" fill="#181818"/>
    <rect x="168" y="141" width="14" height="26" rx="3" fill="#181818"/>
    <rect x="55" y="100" width="110" height="28" rx="8" fill="${c}" opacity=".9"/>
    <circle cx="175" cy="111" r="14" fill="${c}" opacity=".9"/>
    <line x1="55" y1="114" x2="35" y2="130" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <g style="animation:pressDown 1.4s ease-in-out infinite;transform-origin:110px 100px">
      <line x1="85" y1="100" x2="78" y2="68" stroke="#aaa" stroke-width="7" stroke-linecap="round"/>
      <line x1="135" y1="100" x2="142" y2="68" stroke="#aaa" stroke-width="7" stroke-linecap="round"/>
      <rect x="48" y="62" width="124" height="9" rx="4" fill="#555"/>
      <rect x="40" y="56" width="12" height="21" rx="3" fill="#333"/>
      <rect x="168" y="56" width="12" height="21" rx="3" fill="#333"/>
    </g>
  </svg>`,

  "squat": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="190" x2="200" y2="190" stroke="#1e1e1e" stroke-width="3"/>
    <rect x="44" y="60" width="132" height="9" rx="3" fill="#555"/>
    <rect x="36" y="54" width="12" height="21" rx="3" fill="#333"/>
    <rect x="172" y="54" width="12" height="21" rx="3" fill="#333"/>
    <g style="animation:squat 1.4s ease-in-out infinite;transform-origin:110px 80px">
      <circle cx="110" cy="57" r="14" fill="${c}" opacity=".9"/>
      <rect x="93" y="71" width="34" height="34" rx="8" fill="${c}" opacity=".9"/>
      <line x1="93" y1="79" x2="64" y2="69" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <line x1="127" y1="79" x2="156" y2="69" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <line x1="100" y1="105" x2="78" y2="142" stroke="#777" stroke-width="9" stroke-linecap="round"/>
      <line x1="78" y1="142" x2="70" y2="178" stroke="#777" stroke-width="9" stroke-linecap="round"/>
      <line x1="120" y1="105" x2="142" y2="142" stroke="#777" stroke-width="9" stroke-linecap="round"/>
      <line x1="142" y1="142" x2="150" y2="178" stroke="#777" stroke-width="9" stroke-linecap="round"/>
    </g>
  </svg>`,

  "curl": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="190" x2="200" y2="190" stroke="#1e1e1e" stroke-width="3"/>
    <circle cx="110" cy="65" r="14" fill="${c}" opacity=".9"/>
    <rect x="93" y="79" width="34" height="46" rx="8" fill="${c}" opacity=".9"/>
    <line x1="100" y1="125" x2="86" y2="157" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="120" y1="125" x2="134" y2="157" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="86" y1="157" x2="82" y2="180" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="134" y1="157" x2="138" y2="180" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="93" y1="95" x2="75" y2="122" stroke="#777" stroke-width="7" stroke-linecap="round"/>
    <g style="animation:curl 1.2s ease-in-out infinite;transform-origin:75px 122px">
      <line x1="75" y1="122" x2="54" y2="106" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <rect x="40" y="101" width="20" height="9" rx="3" fill="#555"/>
    </g>
    <line x1="127" y1="95" x2="145" y2="122" stroke="#777" stroke-width="7" stroke-linecap="round"/>
    <g style="animation:curl 1.2s ease-in-out infinite reverse;transform-origin:145px 122px">
      <line x1="145" y1="122" x2="166" y2="106" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <rect x="160" y="101" width="20" height="9" rx="3" fill="#555"/>
    </g>
  </svg>`,

  "pulldown": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="18" width="164" height="8" rx="3" fill="#222"/>
    <line x1="110" y1="26" x2="110" y2="48" stroke="#2a2a2a" stroke-width="3"/>
    <g style="animation:pullUp 1.4s ease-in-out infinite;transform-origin:110px 52px">
      <rect x="46" y="48" width="128" height="8" rx="3" fill="#555"/>
      <line x1="70" y1="56" x2="87" y2="84" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <line x1="150" y1="56" x2="133" y2="84" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
    </g>
    <circle cx="110" cy="94" r="14" fill="${c}" opacity=".9"/>
    <rect x="93" y="108" width="34" height="35" rx="8" fill="${c}" opacity=".9"/>
    <line x1="100" y1="143" x2="82" y2="170" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="82" y1="170" x2="68" y2="188" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="120" y1="143" x2="138" y2="170" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="138" y1="170" x2="152" y2="188" stroke="#777" stroke-width="8" stroke-linecap="round"/>
  </svg>`,

  "pullup": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="22" width="164" height="10" rx="4" fill="#3a3a3a"/>
    <line x1="50" y1="12" x2="50" y2="32" stroke="#2a2a2a" stroke-width="6" stroke-linecap="round"/>
    <line x1="170" y1="12" x2="170" y2="32" stroke="#2a2a2a" stroke-width="6" stroke-linecap="round"/>
    <g style="animation:pullUp 1.4s ease-in-out infinite;transform-origin:110px 32px">
      <line x1="78" y1="32" x2="92" y2="68" stroke="#aaa" stroke-width="7" stroke-linecap="round"/>
      <line x1="142" y1="32" x2="128" y2="68" stroke="#aaa" stroke-width="7" stroke-linecap="round"/>
      <circle cx="110" cy="70" r="14" fill="${c}" opacity=".9"/>
      <rect x="93" y="84" width="34" height="44" rx="8" fill="${c}" opacity=".9"/>
      <line x1="100" y1="128" x2="92" y2="162" stroke="#777" stroke-width="8" stroke-linecap="round"/>
      <line x1="120" y1="128" x2="128" y2="162" stroke="#777" stroke-width="8" stroke-linecap="round"/>
      <line x1="92" y1="162" x2="90" y2="185" stroke="#777" stroke-width="8" stroke-linecap="round"/>
      <line x1="128" y1="162" x2="130" y2="185" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    </g>
  </svg>`,

  "row": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="190" x2="200" y2="190" stroke="#1e1e1e" stroke-width="3"/>
    <circle cx="58" cy="98" r="13" fill="${c}" opacity=".9"/>
    <rect x="60" y="106" width="72" height="24" rx="8" fill="${c}" opacity=".9" transform="rotate(10,96,118)"/>
    <line x1="124" y1="126" x2="118" y2="166" stroke="#777" stroke-width="9" stroke-linecap="round"/>
    <line x1="118" y1="166" x2="110" y2="190" stroke="#777" stroke-width="9" stroke-linecap="round"/>
    <line x1="136" y1="124" x2="134" y2="166" stroke="#777" stroke-width="9" stroke-linecap="round"/>
    <line x1="134" y1="166" x2="130" y2="190" stroke="#777" stroke-width="9" stroke-linecap="round"/>
    <g style="animation:pullUp 1.4s ease-in-out infinite;transform-origin:76px 116px">
      <line x1="76" y1="116" x2="80" y2="148" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <line x1="80" y1="148" x2="46" y2="152" stroke="#555" stroke-width="8" stroke-linecap="round"/>
      <rect x="34" y="146" width="10" height="18" rx="2" fill="#333"/>
      <rect x="90" y="146" width="10" height="18" rx="2" fill="#333"/>
    </g>
  </svg>`,

  "shoulder": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="64" y="148" width="92" height="10" rx="4" fill="#1e1e1e"/>
    <rect x="72" y="158" width="12" height="26" rx="3" fill="#181818"/>
    <rect x="136" y="158" width="12" height="26" rx="3" fill="#181818"/>
    <circle cx="110" cy="75" r="14" fill="${c}" opacity=".9"/>
    <rect x="93" y="89" width="34" height="57" rx="8" fill="${c}" opacity=".9"/>
    <line x1="100" y1="146" x2="90" y2="160" stroke="#777" stroke-width="7" stroke-linecap="round"/>
    <line x1="120" y1="146" x2="130" y2="160" stroke="#777" stroke-width="7" stroke-linecap="round"/>
    <g style="animation:pressDown 1.4s ease-in-out infinite;transform-origin:110px 95px">
      <line x1="93" y1="101" x2="57" y2="75" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <line x1="127" y1="101" x2="163" y2="75" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <rect x="37" y="68" width="146" height="9" rx="4" fill="#555"/>
      <rect x="29" y="62" width="11" height="21" rx="2" fill="#333"/>
      <rect x="180" y="62" width="11" height="21" rx="2" fill="#333"/>
    </g>
  </svg>`,

  "lateral": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="190" x2="200" y2="190" stroke="#1e1e1e" stroke-width="3"/>
    <circle cx="110" cy="65" r="14" fill="${c}" opacity=".9"/>
    <rect x="93" y="79" width="34" height="46" rx="8" fill="${c}" opacity=".9"/>
    <line x1="100" y1="125" x2="86" y2="158" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="120" y1="125" x2="134" y2="158" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="86" y1="158" x2="82" y2="180" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="134" y1="158" x2="138" y2="180" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <g style="animation:raise 1.4s ease-in-out infinite;transform-origin:93px 93px">
      <line x1="93" y1="93" x2="44" y2="103" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <rect x="34" y="99" width="14" height="8" rx="3" fill="#555"/>
    </g>
    <g style="animation:raise 1.4s ease-in-out infinite;transform-origin:127px 93px">
      <line x1="127" y1="93" x2="176" y2="103" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <rect x="172" y="99" width="14" height="8" rx="3" fill="#555"/>
    </g>
  </svg>`,

  "pushdown": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="80" y="14" width="60" height="8" rx="3" fill="#1e1e1e"/>
    <line x1="110" y1="22" x2="110" y2="44" stroke="#2a2a2a" stroke-width="3"/>
    <line x1="20" y1="190" x2="200" y2="190" stroke="#1e1e1e" stroke-width="3"/>
    <circle cx="110" cy="65" r="14" fill="${c}" opacity=".9"/>
    <rect x="93" y="79" width="34" height="46" rx="8" fill="${c}" opacity=".9"/>
    <line x1="100" y1="125" x2="86" y2="158" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="120" y1="125" x2="134" y2="158" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="86" y1="158" x2="82" y2="180" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="134" y1="158" x2="138" y2="180" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="93" y1="97" x2="76" y2="85" stroke="#777" stroke-width="6" stroke-linecap="round"/>
    <line x1="127" y1="97" x2="144" y2="85" stroke="#777" stroke-width="6" stroke-linecap="round"/>
    <g style="animation:pushBody 1.2s ease-in-out infinite;transform-origin:110px 87px">
      <line x1="76" y1="85" x2="68" y2="44" stroke="#2a2a2a" stroke-width="3"/>
      <line x1="144" y1="85" x2="152" y2="44" stroke="#2a2a2a" stroke-width="3"/>
      <line x1="68" y1="44" x2="152" y2="44" stroke="#aaa" stroke-width="5"/>
      <line x1="87" y1="83" x2="74" y2="118" stroke="#aaa" stroke-width="5" stroke-linecap="round"/>
      <line x1="133" y1="83" x2="146" y2="118" stroke="#aaa" stroke-width="5" stroke-linecap="round"/>
    </g>
  </svg>`,

  "skull": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="148" width="164" height="12" rx="4" fill="#1e1e1e"/>
    <rect x="40" y="160" width="14" height="28" rx="3" fill="#181818"/>
    <rect x="166" y="160" width="14" height="28" rx="3" fill="#181818"/>
    <rect x="54" y="116" width="112" height="28" rx="8" fill="${c}" opacity=".9"/>
    <circle cx="174" cy="126" r="13" fill="${c}" opacity=".9"/>
    <line x1="54" y1="130" x2="36" y2="148" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="54" y1="124" x2="36" y2="138" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <g style="animation:pressDown 1.4s ease-in-out infinite;transform-origin:96px 116px">
      <line x1="96" y1="116" x2="90" y2="82" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <line x1="118" y1="116" x2="124" y2="82" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <rect x="70" y="76" width="80" height="8" rx="3" fill="#555"/>
      <rect x="63" y="70" width="10" height="20" rx="2" fill="#333"/>
      <rect x="147" y="70" width="10" height="20" rx="2" fill="#333"/>
    </g>
  </svg>`,

  "dip": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="44" y="56" width="10" height="122" rx="4" fill="#1e1e1e"/>
    <rect x="166" y="56" width="10" height="122" rx="4" fill="#1e1e1e"/>
    <rect x="38" y="50" width="22" height="10" rx="3" fill="#2a2a2a"/>
    <rect x="160" y="50" width="22" height="10" rx="3" fill="#2a2a2a"/>
    <g style="animation:pushBody 1.2s ease-in-out infinite;transform-origin:110px 78px">
      <circle cx="110" cy="66" r="13" fill="${c}" opacity=".9"/>
      <rect x="93" y="79" width="34" height="38" rx="8" fill="${c}" opacity=".9"/>
      <line x1="93" y1="90" x2="54" y2="62" stroke="#aaa" stroke-width="7" stroke-linecap="round"/>
      <line x1="127" y1="90" x2="166" y2="62" stroke="#aaa" stroke-width="7" stroke-linecap="round"/>
      <line x1="100" y1="117" x2="94" y2="152" stroke="#777" stroke-width="8" stroke-linecap="round"/>
      <line x1="120" y1="117" x2="126" y2="152" stroke="#777" stroke-width="8" stroke-linecap="round"/>
      <line x1="94" y1="152" x2="90" y2="176" stroke="#777" stroke-width="8" stroke-linecap="round"/>
      <line x1="126" y1="152" x2="130" y2="176" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    </g>
  </svg>`,

  "legpress": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="46" width="12" height="132" rx="4" fill="#1e1e1e"/>
    <rect x="14" y="46" width="106" height="12" rx="4" fill="#1e1e1e"/>
    <rect x="22" y="150" width="70" height="12" rx="4" fill="#1e1e1e"/>
    <g style="animation:legP 1.4s ease-in-out infinite;transform-origin:118px 76px">
      <rect x="100" y="50" width="58" height="52" rx="5" fill="#1e1e1e"/>
      <line x1="114" y1="66" x2="26" y2="124" stroke="#aaa" stroke-width="7" stroke-linecap="round"/>
      <line x1="130" y1="66" x2="42" y2="132" stroke="#aaa" stroke-width="7" stroke-linecap="round"/>
    </g>
    <circle cx="54" cy="128" r="13" fill="${c}" opacity=".9"/>
    <rect x="22" y="140" width="48" height="24" rx="6" fill="${c}" opacity=".9" transform="rotate(-8,46,152)"/>
  </svg>`,

  "rdl": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="190" x2="200" y2="190" stroke="#1e1e1e" stroke-width="3"/>
    <rect x="50" y="157" width="120" height="8" rx="3" fill="#555"/>
    <rect x="42" y="151" width="11" height="20" rx="2" fill="#333"/>
    <rect x="167" y="151" width="11" height="20" rx="2" fill="#333"/>
    <g style="animation:deadl 1.4s ease-in-out infinite;transform-origin:110px 112px">
      <circle cx="110" cy="60" r="13" fill="${c}" opacity=".9"/>
      <rect x="93" y="73" width="34" height="50" rx="8" fill="${c}" opacity=".9"/>
      <line x1="100" y1="110" x2="78" y2="157" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <line x1="120" y1="110" x2="142" y2="157" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
    </g>
    <line x1="97" y1="123" x2="88" y2="190" stroke="#777" stroke-width="9" stroke-linecap="round"/>
    <line x1="123" y1="123" x2="132" y2="190" stroke="#777" stroke-width="9" stroke-linecap="round"/>
  </svg>`,

  "legcurl": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="108" width="164" height="12" rx="4" fill="#1e1e1e"/>
    <rect x="38" y="120" width="12" height="40" rx="3" fill="#181818"/>
    <rect x="170" y="120" width="12" height="40" rx="3" fill="#181818"/>
    <circle cx="172" cy="148" r="10" fill="#2a2a2a"/>
    <rect x="52" y="86" width="90" height="22" rx="8" fill="${c}" opacity=".9"/>
    <circle cx="52" cy="97" r="12" fill="${c}" opacity=".9"/>
    <line x1="142" y1="98" x2="164" y2="126" stroke="#777" stroke-width="9" stroke-linecap="round"/>
    <g style="animation:curl 1.2s ease-in-out infinite;transform-origin:164px 126px">
      <line x1="164" y1="126" x2="170" y2="98" stroke="#777" stroke-width="9" stroke-linecap="round"/>
    </g>
  </svg>`,

  "legext": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="78" y="56" width="12" height="94" rx="4" fill="#1e1e1e"/>
    <rect x="58" y="148" width="104" height="12" rx="4" fill="#1e1e1e"/>
    <rect x="58" y="120" width="12" height="40" rx="3" fill="#181818"/>
    <rect x="150" y="120" width="12" height="40" rx="3" fill="#181818"/>
    <circle cx="110" cy="80" r="13" fill="${c}" opacity=".9"/>
    <rect x="84" y="93" width="50" height="30" rx="7" fill="${c}" opacity=".9"/>
    <g style="animation:extend 1.2s ease-in-out infinite;transform-origin:94px 123px">
      <line x1="94" y1="123" x2="78" y2="158" stroke="#777" stroke-width="9" stroke-linecap="round"/>
      <line x1="78" y1="158" x2="86" y2="182" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    </g>
    <g style="animation:extend 1.2s ease-in-out infinite .1s;transform-origin:122px 123px">
      <line x1="122" y1="123" x2="142" y2="158" stroke="#777" stroke-width="9" stroke-linecap="round"/>
      <line x1="142" y1="158" x2="134" y2="182" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    </g>
  </svg>`,

  "calf": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="190" x2="200" y2="190" stroke="#1e1e1e" stroke-width="3"/>
    <rect x="74" y="178" width="72" height="14" rx="3" fill="#1e1e1e"/>
    <circle cx="110" cy="66" r="13" fill="${c}" opacity=".9"/>
    <rect x="93" y="79" width="34" height="46" rx="8" fill="${c}" opacity=".9"/>
    <g style="animation:calf 1s ease-in-out infinite;transform-origin:110px 128px">
      <line x1="100" y1="125" x2="90" y2="162" stroke="#777" stroke-width="9" stroke-linecap="round"/>
      <line x1="90" y1="162" x2="86" y2="180" stroke="#777" stroke-width="9" stroke-linecap="round"/>
      <line x1="120" y1="125" x2="130" y2="162" stroke="#777" stroke-width="9" stroke-linecap="round"/>
      <line x1="130" y1="162" x2="134" y2="180" stroke="#777" stroke-width="9" stroke-linecap="round"/>
    </g>
  </svg>`,

  "lunge": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="190" x2="200" y2="190" stroke="#1e1e1e" stroke-width="3"/>
    <g style="animation:squat 1.4s ease-in-out infinite;transform-origin:110px 128px">
      <circle cx="110" cy="66" r="13" fill="${c}" opacity=".9"/>
      <rect x="93" y="79" width="34" height="40" rx="8" fill="${c}" opacity=".9"/>
      <line x1="93" y1="96" x2="66" y2="108" stroke="#aaa" stroke-width="5" stroke-linecap="round"/>
      <rect x="55" y="104" width="14" height="8" rx="3" fill="#555"/>
      <line x1="127" y1="96" x2="154" y2="108" stroke="#aaa" stroke-width="5" stroke-linecap="round"/>
      <rect x="152" y="104" width="14" height="8" rx="3" fill="#555"/>
      <line x1="100" y1="119" x2="70" y2="150" stroke="#777" stroke-width="9" stroke-linecap="round"/>
      <line x1="70" y1="150" x2="56" y2="190" stroke="#777" stroke-width="9" stroke-linecap="round"/>
      <line x1="120" y1="119" x2="146" y2="142" stroke="#777" stroke-width="9" stroke-linecap="round"/>
      <line x1="146" y1="142" x2="158" y2="190" stroke="#777" stroke-width="9" stroke-linecap="round"/>
    </g>
  </svg>`,

  "fly": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="28" width="12" height="162" rx="4" fill="#1e1e1e"/>
    <rect x="196" y="28" width="12" height="162" rx="4" fill="#1e1e1e"/>
    <rect x="78" y="132" width="64" height="12" rx="4" fill="#1e1e1e"/>
    <circle cx="110" cy="88" r="14" fill="${c}" opacity=".9"/>
    <rect x="93" y="102" width="34" height="30" rx="6" fill="${c}" opacity=".9"/>
    <line x1="100" y1="132" x2="96" y2="158" stroke="#777" stroke-width="7" stroke-linecap="round"/>
    <line x1="120" y1="132" x2="124" y2="158" stroke="#777" stroke-width="7" stroke-linecap="round"/>
    <g style="animation:raise 1.4s ease-in-out infinite;transform-origin:93px 110px">
      <line x1="93" y1="110" x2="34" y2="88" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <circle cx="34" cy="88" r="7" fill="#2a2a2a"/>
    </g>
    <g style="animation:raise 1.4s ease-in-out infinite reverse;transform-origin:127px 110px">
      <line x1="127" y1="110" x2="186" y2="88" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <circle cx="186" cy="88" r="7" fill="#2a2a2a"/>
    </g>
  </svg>`,

  "hammer": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="190" x2="200" y2="190" stroke="#1e1e1e" stroke-width="3"/>
    <circle cx="110" cy="65" r="14" fill="${c}" opacity=".9"/>
    <rect x="93" y="79" width="34" height="46" rx="8" fill="${c}" opacity=".9"/>
    <line x1="100" y1="125" x2="86" y2="157" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="120" y1="125" x2="134" y2="157" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="86" y1="157" x2="82" y2="180" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="134" y1="157" x2="138" y2="180" stroke="#777" stroke-width="8" stroke-linecap="round"/>
    <line x1="93" y1="95" x2="75" y2="122" stroke="#777" stroke-width="7" stroke-linecap="round"/>
    <g style="animation:curl 1.2s ease-in-out infinite;transform-origin:75px 122px">
      <line x1="75" y1="122" x2="72" y2="98" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <rect x="65" y="90" width="9" height="20" rx="3" fill="#555"/>
    </g>
    <line x1="127" y1="95" x2="145" y2="122" stroke="#777" stroke-width="7" stroke-linecap="round"/>
    <g style="animation:curl 1.2s ease-in-out infinite reverse;transform-origin:145px 122px">
      <line x1="145" y1="122" x2="148" y2="98" stroke="#aaa" stroke-width="6" stroke-linecap="round"/>
      <rect x="146" y="90" width="9" height="20" rx="3" fill="#555"/>
    </g>
  </svg>`,

  "kickback": (c) => `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="190" x2="200" y2="190" stroke="#1e1e1e" stroke-width="3"/>
    <rect x="12" y="154" width="18" height="32" rx="4" fill="#1e1e1e"/>
    <circle cx="21" cy="166" r="7" fill="#2a2a2a"/>
    <circle cx="100" cy="78" r="13" fill="${c}" opacity=".9"/>
    <rect x="83" y="91" width="34" height="36" rx="8" fill="${c}" opacity=".9" transform="rotate(-14,100,109)"/>
    <line x1="108" y1="124" x2="108" y2="190" stroke="#777" stroke-width="9" stroke-linecap="round"/>
    <g style="animation:raise 1.2s ease-in-out infinite;transform-origin:100px 128px">
      <line x1="100" y1="128" x2="122" y2="160" stroke="#777" stroke-width="9" stroke-linecap="round"/>
      <line x1="122" y1="160" x2="152" y2="150" stroke="#777" stroke-width="8" stroke-linecap="round"/>
      <line x1="152" y1="150" x2="21" y2="164" stroke="#2a2a2a" stroke-width="3"/>
    </g>
  </svg>`,
};

// Mapeamento exercício → tipo de animação
const EX_ANIM = {
  "supino-reto": "bench", "supino-inclinado-halter": "bench", "supino-inclinado-barra": "bench",
  "remada-curvada": "row", "puxada-frente": "pulldown", "elevacao-lateral": "lateral",
  "rosca-direta": "curl", "triceps-corda": "pushdown", "agachamento-livre": "squat",
  "agachamento": "squat", "leg-press": "legpress", "stiff": "rdl", "mesa-flexora": "legcurl",
  "cadeira-extensora": "legext", "extensora": "legext", "flexora": "legcurl",
  "panturrilha-pe": "calf", "panturrilha-sentada": "calf", "panturrilha": "calf",
  "desenvolvimento-halter": "shoulder", "desenvolvimento": "shoulder",
  "crucifixo-maquina": "fly", "triceps-testa": "skull", "triceps-mergulho": "dip",
  "paralela": "dip", "barra-fixa": "pullup", "remada-baixa": "row", "pulldown": "pulldown",
  "face-pull": "row", "rosca-martelo": "hammer", "terra-romeno": "rdl",
  "afundo": "lunge", "gluteo-cabo": "kickback", "crossover": "fly",
  "rosca-alternada": "curl", "rosca-concentrada": "curl", "martelo": "hammer",
  "remada-maquina": "row",
};

const ACC = "#e8ff00";

function renderSVG(key) {
  const type = EX_ANIM[key] || "curl";
  const fn = SVGS[type];
  return fn ? fn(ACC) : null;
}

// ===== APP =====
let currentModule = null;
let currentDayIdx = 0;

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelector(`[data-page="${page}"]`).classList.add('active');
  window.scrollTo(0, 0);
  if (page === 'naka') { renderWeekNav('naka-week', NAKA, 'naka'); renderDay('naka-content', NAKA, 0); }
  if (page === 'thayniton') { renderWeekNav('thayniton-week', THAYNITON, 'thayniton'); renderDay('thayniton-content', THAYNITON, 0); }
}

function toggleMenu() { document.getElementById('navMobile').classList.toggle('open'); }

function renderWeekNav(containerId, workout, moduleId) {
  document.getElementById(containerId).innerHTML = workout.days.map((day, i) => `
    <button class="day-btn ${i === 0 ? 'active' : ''}" onclick="selectDay('${moduleId}', ${i})">
      <span class="day-short">${day.short}</span>
      <span>${day.day}</span>
      <span class="day-focus">${day.focus}</span>
    </button>`).join('');
}

function selectDay(moduleId, idx) {
  document.querySelectorAll(`#${moduleId}-week .day-btn`).forEach((b, i) => b.classList.toggle('active', i === idx));
  renderDay(`${moduleId}-content`, moduleId === 'naka' ? NAKA : THAYNITON, idx);
}

function renderDay(containerId, workout, dayIdx) {
  const day = workout.days[dayIdx];
  if (!day) return;
  document.getElementById(containerId).innerHTML = `
    <div class="day-header">
      <div class="day-number">${day.day.toUpperCase()} — DIA ${dayIdx + 1}</div>
      <div class="day-title">${day.title}</div>
      <div class="day-subtitle">${day.subtitle}</div>
    </div>
    <div class="ex-list">${day.exercises.map((ex, i) => renderExercise(ex, i)).join('')}</div>`;
}

function renderExercise(ex, i) {
  const data = EXERCISES_DB[ex.key];
  if (!data) return '';
  const techTag = ex.tech ? `<span class="ex-tech">${ex.tech}</span>` : '';
  return `
    <div class="ex-item" onclick="openModal('${ex.key}','${ex.sets}','${ex.reps}','${ex.tech||''}')">
      <div class="ex-num">${String(i+1).padStart(2,'0')}</div>
      <div class="ex-icon">${data.icon}</div>
      <div class="ex-info">
        <div class="ex-name">${data.name}</div>
        <div class="ex-meta">
          <span class="ex-sets">${ex.sets} × ${ex.reps}</span>
          ${techTag}
          <span class="ex-muscle">${data.muscle}</span>
        </div>
      </div>
      <div class="ex-cta">ver animação</div>
    </div>`;
}

function openModal(key, sets, reps, tech) {
  const data = EXERCISES_DB[key];
  if (!data) return;
  const svg = renderSVG(key);
  document.getElementById('modalAnim').innerHTML = svg
    ? `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center">${svg}</div>`
    : `<span style="font-size:64px;opacity:.4">${data.icon}</span>`;
  document.getElementById('modalTitle').textContent = data.name;
  const pts = [`${sets} séries`, `${reps} reps`];
  if (tech) pts.push(tech);
  document.getElementById('modalDetail').innerHTML = pts.map(p => `<span>${p}</span>`).join('');
  document.getElementById('modalTip').innerHTML = `<strong style="color:var(--text);display:block;margin-bottom:6px">💡 Dica de execução</strong>${data.tip}`;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
window.addEventListener('scroll', () => {
  document.getElementById('nav').style.background = window.scrollY > 20 ? 'rgba(8,8,8,0.98)' : 'rgba(10,10,10,0.9)';
});
