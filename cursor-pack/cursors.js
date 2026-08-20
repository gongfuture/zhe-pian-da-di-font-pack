(function () {
  "use strict";

  function svg(body, label) {
    return (
      '<svg class="cursor-icon" viewBox="0 0 64 64" role="img" aria-label="' +
      label +
      '">' +
      body +
      "</svg>"
    );
  }

  function sparkle(x, y, size, className) {
    var half = size * 0.2;
    return (
      '<path class="' +
      className +
      '" d="M ' +
      x +
      " " +
      (y - size) +
      " C " +
      (x + half) +
      " " +
      (y - half) +
      ", " +
      (x + half) +
      " " +
      (y - half) +
      ", " +
      (x + size) +
      " " +
      y +
      " C " +
      (x + half) +
      " " +
      (y + half) +
      ", " +
      (x + half) +
      " " +
      (y + half) +
      ", " +
      x +
      " " +
      (y + size) +
      " C " +
      (x - half) +
      " " +
      (y + half) +
      ", " +
      (x - half) +
      " " +
      (y + half) +
      ", " +
      (x - size) +
      " " +
      y +
      " C " +
      (x - half) +
      " " +
      (y - half) +
      ", " +
      (x - half) +
      " " +
      (y - half) +
      ", " +
      x +
      " " +
      (y - size) +
      ' Z" />'
    );
  }

  function arrowBody(transform) {
    return (
      '<g' +
      (transform ? ' transform="' + transform + '"' : "") +
      ">" +
      '<path class="cursor-paper" d="M7 6 L48 24 L30 30 L40 49 L31 54 L21 34 L9 45 Z" />' +
      '<path class="cursor-fold" d="M8.8 7.6 L23 31.5 L47 24.2 M23 31.5 L14 40" />' +
      '<path class="cursor-yellow" d="M41 14 l2.1 4.1 4.6.7-3.3 3.2.8 4.6-4.2-2.2-4.1 2.2.8-4.6-3.3-3.2 4.6-.7z" />' +
      "</g>"
    );
  }

  function envelope(x, y, scale, extraClass) {
    return (
      '<g class="' +
      (extraClass || "") +
      '" transform="translate(' +
      x +
      " " +
      y +
      ") scale(" +
      scale +
      ')">' +
      '<rect class="cursor-paper-thin" x="0" y="0" width="22" height="15" rx="2.5" />' +
      '<path class="cursor-fold" d="M2 2 l9 7 9-7 M2 13 l6-5 M20 13 l-6-5" />' +
      "</g>"
    );
  }

  function resizeBody(rotation) {
    return (
      '<g transform="rotate(' +
      rotation +
      ' 32 32)">' +
      '<path class="cursor-paper" d="M32 5 L19 19 L27 19 L27 45 L19 45 L32 59 L45 45 L37 45 L37 19 L45 19 Z" />' +
      '<path class="cursor-fold" d="M32 9 L32 55 M24 18 L32 10 L40 18 M24 46 L32 54 L40 46" />' +
      sparkle(45, 32, 3.5, "cursor-pink") +
      "</g>"
    );
  }

  var cursors = [
    {
      id: "normal",
      name: "正常选择 · 纸飞机箭头",
      shortName: "正常选择",
      english: "NORMAL SELECT",
      format: "CUR",
      hotspot: [7, 6],
      description: "点击热点固定在纸飞机最前端，尾部星芒不参与定位。",
      art: svg(arrowBody(), "正常选择指针")
    },
    {
      id: "help",
      name: "帮助选择 · 旅途问号",
      shortName: "帮助选择",
      english: "HELP SELECT",
      format: "CUR",
      hotspot: [7, 8],
      description: "保留箭头尖端，在右上角加一枚酸橙黄问号徽章。",
      art: svg(
        arrowBody("translate(1 4) scale(.82)") +
          '<path class="cursor-paper" d="M39 7 C39 2 45 1 49 3 C54 5 55 10 52 14 C50 17 47 17 47 21" />' +
          '<circle class="cursor-pink" cx="47" cy="27" r="3" />' +
          sparkle(57, 8, 3.5, "cursor-yellow"),
        "帮助选择指针"
      )
    },
    {
      id: "working",
      name: "后台运行 · 信笺绕行",
      shortName: "后台运行",
      english: "WORKING IN BACKGROUND",
      format: "ANI",
      hotspot: [6, 7],
      description: "箭头保持稳定，信封与星点绕行；动画不会改变点击热点。",
      animated: true,
      art: svg(
        arrowBody("translate(0 5) scale(.72)") +
          '<g class="cursor-orbit">' +
          '<circle class="cursor-dash" cx="44" cy="39" r="14" />' +
          envelope(38, 20, 0.64, "") +
          sparkle(52, 51, 3.8, "cursor-pink") +
          "</g>",
        "后台运行指针"
      )
    },
    {
      id: "busy",
      name: "忙碌 · 酸橙星环",
      shortName: "忙碌",
      english: "BUSY",
      format: "ANI",
      hotspot: [32, 32],
      description: "以橙子切片为中心，彩色星芒旋转；中心就是等待位置。",
      animated: true,
      art: svg(
        '<g class="cursor-spin">' +
          '<circle class="cursor-paper" cx="32" cy="32" r="18" />' +
          '<circle class="cursor-yellow" cx="32" cy="32" r="13.5" />' +
          '<path class="cursor-line-ink" d="M32 19 v26 M19 32 h26 M23 23 l18 18 M41 23 23 41" />' +
          '<circle class="cursor-paper-thin" cx="32" cy="32" r="4" />' +
          sparkle(51, 16, 5, "cursor-pink") +
          sparkle(13, 44, 4, "cursor-sky") +
          "</g>",
        "忙碌指针"
      )
    },
    {
      id: "precision",
      name: "精确选择 · 四角星准心",
      shortName: "精确选择",
      english: "PRECISION SELECT",
      format: "CUR",
      hotspot: [32, 32],
      description: "中心留出一个明确空点，四条星形尖角承担准星方向。",
      art: svg(
        '<path class="cursor-paper" d="M32 7 C35 23 41 29 57 32 C41 35 35 41 32 57 C29 41 23 35 7 32 C23 29 29 23 32 7 Z" />' +
          '<circle class="cursor-blue" cx="32" cy="32" r="6" />' +
          '<circle class="cursor-paper-thin" cx="32" cy="32" r="2.3" />' +
          sparkle(48, 16, 3.5, "cursor-yellow") +
          '<path class="cursor-line-blue" d="M32 4 v7 M32 53 v7 M4 32 h7 M53 32 h7" />',
        "精确选择指针"
      )
    },
    {
      id: "text",
      name: "文本选择 · 信纸折痕",
      shortName: "文本选择",
      english: "TEXT SELECT",
      format: "CUR",
      hotspot: [32, 32],
      description: "I-beam 保留标准结构，折痕蓝线与薄荷花只做边缘装饰。",
      art: svg(
        '<path class="cursor-paper" d="M17 8 H47 V16 H37 V48 H47 V56 H17 V48 H27 V16 H17 Z" />' +
          '<path class="cursor-fold" d="M21 12 H43 M32 16 V48 M21 52 H43" />' +
          '<g transform="translate(47 14)">' +
          '<circle class="cursor-sky" cx="0" cy="-5" r="4" />' +
          '<circle class="cursor-sky" cx="5" cy="0" r="4" />' +
          '<circle class="cursor-sky" cx="0" cy="5" r="4" />' +
          '<circle class="cursor-sky" cx="-5" cy="0" r="4" />' +
          '<circle class="cursor-yellow" cx="0" cy="0" r="3" />' +
          "</g>",
        "文本选择指针"
      )
    },
    {
      id: "handwriting",
      name: "手写 · 旅行钢笔",
      shortName: "手写",
      english: "HANDWRITING",
      format: "CUR",
      hotspot: [9, 55],
      description: "热点落在笔尖；笔杆采用纸飞机折线，尾部是一枚粉色邮戳。",
      art: svg(
        '<g transform="rotate(-43 32 32)">' +
          '<path class="cursor-paper" d="M27 7 H39 L40 43 L33 58 L26 43 Z" />' +
          '<path class="cursor-fold" d="M28 17 H39 M27 42 H40 M33 18 V53" />' +
          '<path class="cursor-blue" d="M27 7 h12 v10 H27z" />' +
          '<circle class="cursor-pink" cx="33" cy="11.5" r="3" />' +
          "</g>" +
          '<path class="cursor-dash" d="M12 54 C22 47 23 60 34 55" />',
        "手写指针"
      )
    },
    {
      id: "unavailable",
      name: "不可用 · 被退回的信",
      shortName: "不可用",
      english: "UNAVAILABLE",
      format: "CUR",
      hotspot: [32, 32],
      description: "信封仍可辨认，但橙色斜杠明确表达不可操作。",
      art: svg(
        '<circle class="cursor-paper" cx="32" cy="32" r="24" />' +
          envelope(20, 25, 1.1, "") +
          '<path d="M15 49 L49 15" fill="none" stroke="#ff8a2a" stroke-linecap="round" stroke-width="8" />' +
          '<path d="M15 49 L49 15" fill="none" stroke="#173746" stroke-linecap="round" stroke-width="2" />',
        "不可用指针"
      )
    },
    {
      id: "resize-ns",
      name: "垂直调整 · 路线双箭头",
      shortName: "垂直调整",
      english: "VERTICAL RESIZE",
      format: "CUR",
      hotspot: [32, 32],
      description: "四组缩放共用一套手绘纸带轮廓，只改变方向。",
      art: svg(resizeBody(0), "垂直调整指针")
    },
    {
      id: "resize-we",
      name: "水平调整 · 路线双箭头",
      shortName: "水平调整",
      english: "HORIZONTAL RESIZE",
      format: "CUR",
      hotspot: [32, 32],
      description: "水平方向仍以中心为热点，保证窗口边缘拖动准确。",
      art: svg(resizeBody(90), "水平调整指针")
    },
    {
      id: "resize-nwse",
      name: "对角调整 1 · 斜向纸带",
      shortName: "对角调整 1",
      english: "DIAGONAL RESIZE 1",
      format: "CUR",
      hotspot: [32, 32],
      description: "西北到东南方向，端点保持足够粗，缩小后仍可识别。",
      art: svg('<g transform="translate(6 6) scale(.82)">' + resizeBody(-45) + "</g>", "对角调整一指针")
    },
    {
      id: "resize-nesw",
      name: "对角调整 2 · 斜向纸带",
      shortName: "对角调整 2",
      english: "DIAGONAL RESIZE 2",
      format: "CUR",
      hotspot: [32, 32],
      description: "东北到西南方向，与另一条对角线形成完整组合。",
      art: svg('<g transform="translate(6 6) scale(.82)">' + resizeBody(45) + "</g>", "对角调整二指针")
    },
    {
      id: "move",
      name: "移动 · 四向旅行罗盘",
      shortName: "移动",
      english: "MOVE",
      format: "CUR",
      hotspot: [32, 32],
      description: "四个方向像旅行路线一样展开，中间是一颗酸橙星。",
      art: svg(
        '<path class="cursor-paper" d="M32 4 L21 16 H27 V27 H16 V21 L4 32 L16 43 V37 H27 V48 H21 L32 60 L43 48 H37 V37 H48 V43 L60 32 L48 21 V27 H37 V16 H43 Z" />' +
          '<circle class="cursor-yellow" cx="32" cy="32" r="8" />' +
          '<path class="cursor-line-blue" d="M32 9 V24 M32 40 V55 M9 32 H24 M40 32 H55" />' +
          sparkle(32, 32, 4.5, "cursor-orange"),
        "移动指针"
      )
    },
    {
      id: "alternate",
      name: "备选选择 · 向上启程",
      shortName: "备选选择",
      english: "ALTERNATE SELECT",
      format: "CUR",
      hotspot: [32, 5],
      description: "向上的纸飞机代替生硬箭头，弯曲尾迹补充旅行感。",
      art: svg(
        '<path class="cursor-paper" d="M32 5 L50 38 L37 33 L32 58 L27 33 L14 38 Z" />' +
          '<path class="cursor-fold" d="M32 7 V48 M17 36 L32 25 L47 36" />' +
          '<path class="cursor-dash" d="M18 53 C8 46 10 37 19 42" />' +
          sparkle(50, 14, 4, "cursor-pink"),
        "备选选择指针"
      )
    },
    {
      id: "link",
      name: "链接选择 · 星愿手套",
      shortName: "链接选择",
      english: "LINK SELECT",
      format: "CUR",
      hotspot: [25, 7],
      description: "保留熟悉的指向手势，指尖星芒负责提示可以打开。",
      art: svg(
        '<path class="cursor-paper" d="M23 31 V12 C23 7 31 7 31 12 V27 L35 21 C37 17 43 20 41 24 L39 28 L43 24 C46 21 51 25 48 29 L45 32 L49 29 C52 27 56 32 53 35 L43 48 C40 52 35 55 29 54 C22 53 17 49 14 44 L10 37 C8 32 15 29 18 34 Z" />' +
          '<path class="cursor-fold" d="M31 27 V39 M39 28 L35 38 M45 32 L39 41" />' +
          sparkle(25, 6, 5, "cursor-yellow") +
          '<circle class="cursor-pink" cx="48" cy="44" r="4" />',
        "链接选择指针"
      )
    }
  ];

  var grid = document.getElementById("cursorGrid");
  var preview = document.getElementById("desktopPreview");
  var liveCursor = document.getElementById("liveCursor");
  var heroPointer = document.getElementById("heroPointer");
  var selectedNumber = document.getElementById("selectedNumber");
  var selectedEnglish = document.getElementById("selectedEnglish");
  var selectedName = document.getElementById("selectedName");
  var selectedDescription = document.getElementById("selectedDescription");
  var hotspotChip = document.getElementById("hotspotChip");
  var backgroundControls = document.getElementById("backgroundControls");
  var sizeControls = document.getElementById("sizeControls");
  var motionToggle = document.getElementById("motionToggle");
  var activeCursor = cursors[0];
  var previewSize = 48;
  var isLive = false;

  function twoDigits(number) {
    return String(number).padStart(2, "0");
  }

  function renderCards() {
    grid.innerHTML = cursors
      .map(function (cursor, index) {
        return (
          '<button class="cursor-card' +
          (index === 0 ? " active" : "") +
          '" type="button" data-cursor-id="' +
          cursor.id +
          '" aria-pressed="' +
          (index === 0 ? "true" : "false") +
          '">' +
          '<span class="cursor-card-top"><span class="cursor-card-index">' +
          twoDigits(index + 1) +
          '</span><span class="cursor-card-format' +
          (cursor.animated ? " is-animated" : "") +
          '">' +
          cursor.format +
          "</span></span>" +
          '<span class="cursor-card-art" aria-hidden="true">' +
          cursor.art +
          "</span>" +
          "<strong>" +
          cursor.shortName +
          "</strong>" +
          "<small>" +
          cursor.english +
          "</small>" +
          "</button>"
        );
      })
      .join("");
  }

  function updateLiveCursor() {
    liveCursor.innerHTML = activeCursor.art;
    liveCursor.style.width = previewSize + "px";
    liveCursor.style.height = previewSize + "px";
    if (!isLive) {
      liveCursor.style.transform = "translate(-50%, -50%)";
    }
  }

  function selectCursor(cursorId) {
    var next = cursors.find(function (cursor) {
      return cursor.id === cursorId;
    });
    if (!next) {
      return;
    }
    activeCursor = next;
    var index = cursors.indexOf(next);
    grid.querySelectorAll(".cursor-card").forEach(function (card) {
      var active = card.dataset.cursorId === cursorId;
      card.classList.toggle("active", active);
      card.setAttribute("aria-pressed", active ? "true" : "false");
    });
    selectedNumber.textContent = twoDigits(index + 1);
    selectedEnglish.textContent = next.english;
    selectedName.textContent = next.name;
    selectedDescription.textContent = next.description;
    hotspotChip.textContent = "HOTSPOT " + next.hotspot[0] + " × " + next.hotspot[1];
    updateLiveCursor();
  }

  function setSegmentedActive(container, selectedButton) {
    container.querySelectorAll("button").forEach(function (button) {
      var active = button === selectedButton;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  renderCards();
  heroPointer.innerHTML = cursors[0].art;
  updateLiveCursor();

  grid.addEventListener("click", function (event) {
    var card = event.target.closest("[data-cursor-id]");
    if (card) {
      selectCursor(card.dataset.cursorId);
    }
  });

  backgroundControls.addEventListener("click", function (event) {
    var button = event.target.closest("[data-background]");
    if (!button) {
      return;
    }
    setSegmentedActive(backgroundControls, button);
    preview.dataset.background = button.dataset.background;
  });

  sizeControls.addEventListener("click", function (event) {
    var button = event.target.closest("[data-size]");
    if (!button) {
      return;
    }
    setSegmentedActive(sizeControls, button);
    previewSize = Number(button.dataset.size) || 48;
    updateLiveCursor();
  });

  motionToggle.addEventListener("change", function () {
    document.body.dataset.motion = motionToggle.checked ? "on" : "off";
  });

  preview.addEventListener("pointerenter", function (event) {
    if (event.pointerType === "touch") {
      return;
    }
    isLive = true;
    preview.classList.add("is-live");
    liveCursor.classList.remove("is-parked");
  });

  preview.addEventListener("pointermove", function (event) {
    if (!isLive || event.pointerType === "touch") {
      return;
    }
    var rect = preview.getBoundingClientRect();
    var scale = previewSize / 64;
    liveCursor.style.left = event.clientX - rect.left + "px";
    liveCursor.style.top = event.clientY - rect.top + "px";
    liveCursor.style.transform =
      "translate(" +
      -activeCursor.hotspot[0] * scale +
      "px," +
      -activeCursor.hotspot[1] * scale +
      "px)";
  });

  preview.addEventListener("pointerleave", function () {
    isLive = false;
    preview.classList.remove("is-live");
    liveCursor.classList.add("is-parked");
    liveCursor.style.left = "";
    liveCursor.style.top = "";
    liveCursor.style.transform = "translate(-50%, -50%)";
  });

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    motionToggle.checked = false;
    document.body.dataset.motion = "off";
  }
})();
