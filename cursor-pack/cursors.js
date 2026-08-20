(function () {
  "use strict";

  function svg(body, label) {
    return (
      '<svg class="cursor-icon" viewBox="0 0 64 64" role="img" aria-label="' +
      label +
      '" focusable="false">' +
      body +
      "</svg>"
    );
  }

  function arrowBody(transform) {
    return (
      '<g' +
      (transform ? ' transform="' + transform + '"' : "") +
      ">" +
      '<path class="cursor-plane-shape" d="M6.5 7.2 C20.5 11.3 40.2 17.3 56 23.3 L29.2 34.1 L49.4 49.4 C38.6 47.4 28.6 43.8 20.6 39.3 C18.5 44.5 15.8 49.6 12.6 54.2 C11.5 39.5 9.4 22.5 6.5 7.2 Z" />' +
      '<path class="cursor-plane-upper" d="M8.7 9.3 C22 13.3 40 18.6 52.8 23.2 C43.5 26.3 35.1 29.7 29.2 32.5 Z" />' +
      '<path class="cursor-plane-shadow" d="M29.2 34.1 L46.3 47.3 C36.6 44.9 28.5 41.8 21.8 38.1 Z" />' +
      '<path class="cursor-plane-fold" d="M8.7 9.3 L29.2 34.1 L52.8 23.2 M12.6 13.2 L34.9 29.8 M29.2 34.1 L20.6 39.3" />' +
      '<path class="cursor-plane-light" d="M10.1 10.7 C21 14.4 35.1 18.5 45.5 21.8" />' +
      "</g>"
    );
  }

  function resizeBody(rotation) {
    return (
      '<g transform="rotate(' +
      rotation +
      ' 32 32)">' +
      '<path class="cursor-shape" d="M32 6 L22 17 H28 V47 H22 L32 58 L42 47 H36 V17 H42 Z" />' +
      '<path class="cursor-panel" d="M32 9.5 L24.8 16 H39.2 Z M32 54.5 L24.8 48 H39.2 Z" />' +
      '<path class="cursor-line" d="M32 11 V53" />' +
      "</g>"
    );
  }

  var cursors = [
    {
      id: "normal",
      name: "正常选择 · 旅行纸飞机",
      english: "NORMAL SELECT",
      art: svg(arrowBody(), "正常选择指针")
    },
    {
      id: "help",
      name: "帮助选择 · 酸橙问号",
      english: "HELP SELECT",
      art: svg(
        arrowBody("translate(0 5) scale(.78)") +
          '<g transform="translate(36 5)">' +
          '<circle class="cursor-shape" cx="11" cy="11" r="10" />' +
          '<circle class="cursor-highlight" cx="11" cy="11" r="7.2" />' +
          '<path class="cursor-line-ink" d="M7.5 8.5 C7.8 5.8 10 4.4 12.4 4.8 C15.2 5.2 16.5 7.3 15.7 9.5 C15 11.3 12.5 11.8 11.7 14" />' +
          '<circle class="cursor-ink" cx="11.2" cy="17" r="1.6" />' +
          "</g>",
        "帮助选择指针"
      )
    },
    {
      id: "working",
      name: "后台运行 · 路线进度",
      english: "WORKING IN BACKGROUND",
      animated: true,
      art: svg(
        arrowBody("translate(0 6) scale(.72)") +
          '<g transform="translate(31 24)">' +
          '<circle class="cursor-shape" cx="14" cy="14" r="12.5" />' +
          '<circle class="cursor-route" cx="14" cy="14" r="8.5" />' +
          '<circle class="cursor-highlight" cx="14" cy="5.5" r="2.8" />' +
          '<circle class="cursor-accent" cx="21.4" cy="17.8" r="2.3" />' +
          '<circle class="cursor-sky" cx="7.1" cy="19" r="2.1" />' +
          "</g>",
        "后台运行指针"
      )
    },
    {
      id: "busy",
      name: "忙碌 · 酸橙进度环",
      english: "BUSY",
      animated: true,
      art: svg(
        '<circle class="cursor-shape" cx="32" cy="32" r="20.5" />' +
          '<circle class="cursor-panel" cx="32" cy="32" r="15.5" />' +
          '<g class="cursor-spinner-primary">' +
          '<path d="M32 14.5 V21 M49.5 32 H43 M32 49.5 V43 M14.5 32 H21" />' +
          "</g>" +
          '<g class="cursor-spinner-secondary">' +
          '<path d="M44.4 19.6 L39.8 24.2 M44.4 44.4 L39.8 39.8 M19.6 44.4 L24.2 39.8 M19.6 19.6 L24.2 24.2" />' +
          "</g>" +
          '<circle class="cursor-shape" cx="32" cy="32" r="5" />' +
          '<circle class="cursor-accent" cx="32" cy="32" r="2.1" />',
        "忙碌指针"
      )
    },
    {
      id: "precision",
      name: "精确选择 · 旅行准星",
      english: "PRECISION SELECT",
      art: svg(
        '<path class="cursor-underlay" d="M32 5 V24 M32 40 V59 M5 32 H24 M40 32 H59" />' +
          '<path class="cursor-line-ink" d="M32 5 V24 M32 40 V59 M5 32 H24 M40 32 H59" />' +
          '<path class="cursor-accent" d="M32 3 L28.5 10 H35.5 Z M61 32 L54 28.5 V35.5 Z M32 61 L28.5 54 H35.5 Z M3 32 L10 28.5 V35.5 Z" />' +
          '<circle class="cursor-shape" cx="32" cy="32" r="9" />' +
          '<circle class="cursor-highlight-outline" cx="32" cy="32" r="3.3" />',
        "精确选择指针"
      )
    },
    {
      id: "text",
      name: "文本选择 · 折线光标",
      english: "TEXT SELECT",
      art: svg(
        '<path class="cursor-shape" d="M18 8 H46 V15 H36 V49 H46 V56 H18 V49 H28 V15 H18 Z" />' +
          '<path class="cursor-panel" d="M21 10.8 H43 V13 H34 V51 H43 V53.2 H21 V51 H30 V13 H21 Z" />' +
          '<path class="cursor-line" d="M32 15 V49" />',
        "文本选择指针"
      )
    },
    {
      id: "handwriting",
      name: "手写 · 旅行钢笔",
      english: "HANDWRITING",
      art: svg(
        '<g transform="rotate(-42 32 32)">' +
          '<path class="cursor-shape" d="M24 7 H40 V34 L32 58 L24 34 Z" />' +
          '<path class="cursor-panel" d="M26 9 H38 V19 H26 Z" />' +
          '<path class="cursor-accent" d="M25.5 9 H38.5 V15 H25.5 Z" />' +
          '<path class="cursor-line" d="M25.5 21 H38.5 M32 21 V49" />' +
          '<circle class="cursor-highlight-outline" cx="32" cy="31" r="3.1" />' +
          '<path class="cursor-ink" d="M29.5 50 L32 58 L34.5 50 Z" />' +
          "</g>",
        "手写指针"
      )
    },
    {
      id: "unavailable",
      name: "不可用 · 禁止通行",
      english: "UNAVAILABLE",
      art: svg(
        '<circle class="cursor-shape" cx="32" cy="32" r="22.5" />' +
          '<g opacity=".72">' +
          arrowBody("translate(14 15) scale(.43)") +
          "</g>" +
          '<path class="cursor-danger-underlay" d="M16 48 L48 16" />' +
          '<path class="cursor-danger-line" d="M16 48 L48 16" />',
        "不可用指针"
      )
    },
    {
      id: "resize-ns",
      name: "垂直调整 · 路线双箭头",
      english: "VERTICAL RESIZE",
      art: svg(resizeBody(0), "垂直调整指针")
    },
    {
      id: "resize-we",
      name: "水平调整 · 路线双箭头",
      english: "HORIZONTAL RESIZE",
      art: svg(resizeBody(90), "水平调整指针")
    },
    {
      id: "resize-nwse",
      name: "对角调整 1 · 路线双箭头",
      english: "DIAGONAL RESIZE 1",
      art: svg(resizeBody(-45), "对角调整一指针")
    },
    {
      id: "resize-nesw",
      name: "对角调整 2 · 路线双箭头",
      english: "DIAGONAL RESIZE 2",
      art: svg(resizeBody(45), "对角调整二指针")
    },
    {
      id: "move",
      name: "移动 · 四向路线",
      english: "MOVE",
      art: svg(
        '<path class="cursor-shape" d="M32 5 L22 16 H28 V28 H16 V22 L5 32 L16 42 V36 H28 V48 H22 L32 59 L42 48 H36 V36 H48 V42 L59 32 L48 22 V28 H36 V16 H42 Z" />' +
          '<path class="cursor-panel" d="M32 9 L25 15 H39 Z M55 32 L49 25 V39 Z M32 55 L25 49 H39 Z M9 32 L15 25 V39 Z" />' +
          '<path class="cursor-line" d="M32 11 V53 M11 32 H53" />' +
          '<circle class="cursor-highlight-outline" cx="32" cy="32" r="4.4" />',
        "移动指针"
      )
    },
    {
      id: "alternate",
      name: "备选选择 · 向上纸飞机",
      english: "ALTERNATE SELECT",
      art: svg(
        '<g transform="translate(5 5) scale(.84) rotate(45 32 32)">' +
          arrowBody() +
          "</g>",
        "备选选择指针"
      )
    },
    {
      id: "link",
      name: "链接选择 · 旅行手套",
      english: "LINK SELECT",
      art: svg(
        '<path class="cursor-shape" d="M24 31 V12.5 C24 8.2 30 8.2 30 12.5 V27 L34 21 C36 17.8 41 20 39.7 23.4 L38 28 L42 24 C44.6 21.5 49 24.1 47 27.4 L43 32 L47 29 C50.2 26.8 53.6 31 51.2 34.3 L42.5 47 C39.5 51.8 34.8 54 29.2 53.2 C23.3 52.3 18.6 48.3 15.4 43.1 L11 36.2 C8.8 32.5 14 29.3 17 33 Z" />' +
          '<path class="cursor-panel" d="M16.8 42.8 C20.3 47.8 24.7 50.5 29.8 51.1 C34.2 51.6 38.1 49.7 40.7 46.1 L43 42.8 C35.3 46.6 25.4 47 16.8 42.8 Z" />' +
          '<path class="cursor-line" d="M30 27 V39 M38 28 L34.5 38 M43 32 L38.7 40" />' +
          '<circle class="cursor-highlight-outline" cx="27" cy="8" r="3.2" />',
        "链接选择指针"
      )
    },
    {
      id: "location",
      name: "位置选择 · 旅行定位标",
      english: "LOCATION SELECT",
      art: svg(
        arrowBody("translate(0 6) scale(.69)") +
          '<g transform="translate(31 8)">' +
          '<path class="cursor-shape" d="M15 1.5 C7.1 1.5 2 7.1 2 14.6 C2 25.1 15 40.5 15 40.5 C15 40.5 28 25.1 28 14.6 C28 7.1 22.9 1.5 15 1.5 Z" />' +
          '<circle class="cursor-panel" cx="15" cy="14.5" r="7.2" />' +
          '<circle class="cursor-highlight-outline" cx="15" cy="14.5" r="3.1" />' +
          "</g>",
        "位置选择指针"
      )
    },
    {
      id: "person",
      name: "人员选择 · 旅伴徽章",
      english: "PERSON SELECT",
      art: svg(
        arrowBody("translate(0 6) scale(.69)") +
          '<g transform="translate(32 11)">' +
          '<circle class="cursor-shape" cx="14" cy="16" r="13.5" />' +
          '<circle class="cursor-highlight" cx="14" cy="11.5" r="4.8" />' +
          '<path class="cursor-accent" d="M5.8 26.2 C7 20.3 10 18 14 18 C18 18 21 20.3 22.2 26.2 Z" />' +
          '<path class="cursor-line" d="M7.5 25.2 C8.8 21.4 11 20 14 20 C17 20 19.2 21.4 20.5 25.2" />' +
          "</g>",
        "人员选择指针"
      )
    }
  ];

  var systemNames = {
    normal: "Arrow",
    help: "Help",
    working: "AppStarting",
    busy: "Wait",
    precision: "Crosshair",
    text: "IBeam",
    handwriting: "NWPen",
    unavailable: "No",
    "resize-ns": "SizeNS",
    "resize-we": "SizeWE",
    "resize-nwse": "SizeNWSE",
    "resize-nesw": "SizeNESW",
    move: "SizeAll",
    alternate: "UpArrow",
    link: "Hand",
    location: "Pin",
    person: "Person"
  };

  function twoDigits(number) {
    return String(number).padStart(2, "0");
  }

  function renderCards() {
    var grid = document.getElementById("cursorGrid");
    grid.innerHTML = cursors
      .map(function (cursor, index) {
        return (
          '<article class="cursor-card">' +
          '<div class="cursor-card-meta"><span class="cursor-card-index">' +
          twoDigits(index + 1) +
          "</span><code>" +
          systemNames[cursor.id] +
          "</code></div>" +
          '<div class="cursor-card-art" aria-hidden="true">' +
          cursor.art +
          (cursor.animated ? '<span class="static-frame-label">静态帧</span>' : "") +
          "</div>" +
          '<div class="cursor-card-copy"><h3>' +
          cursor.name +
          '</h3><span class="english-name">' +
          cursor.english +
          "</span></div></article>"
        );
      })
      .join("");

    document.getElementById("cursorCount").textContent = String(cursors.length);
  }

  renderCards();
})();
