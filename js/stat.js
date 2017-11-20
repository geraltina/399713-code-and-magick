'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(110, 20);
  ctx.bezierCurveTo(210, 30, 460, 30, 530, 20);
  ctx.bezierCurveTo(520, 110, 520, 210, 530, 290);
  ctx.bezierCurveTo(460, 280, 210, 280, 110, 290);
  ctx.bezierCurveTo(120, 210, 120, 110, 110, 20);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.bezierCurveTo(200, 20, 450, 20, 520, 10);
  ctx.bezierCurveTo(510, 100, 510, 200, 520, 280);
  ctx.bezierCurveTo(450, 270, 200, 270, 100, 280);
  ctx.bezierCurveTo(110, 200, 110, 100, 100, 10);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#4169E1';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var value = times[i];
    if (value > max) {
      max = value;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  ctx.fillText('Худшее время: ' + Math.floor(max) + ' мс у игрока ' + names[maxIndex], 130, 80);

  var barWidth = 40;
  var indent = 70; // интервал между столбиками увеличен для удобочитаемости
  var initialX = 130;
  var initialY = 265;
  var lineHeight = 15;
  var colorBlue = 'rgba(65, 105, 225, 1)';
  var colorRed = 'rgba(255, 0, 0, 1)';
  var getRect = function (index, time) {
    ctx.fillRect(initialX + indent * index, initialY, barWidth, time * step);
  };
  var writeText = function (index, name) {
    ctx.fillText(name, initialX + indent * index, initialY - lineHeight - histogramHeight);
  };
  var getRandomBlueColor = function () {
    ctx.fillStyle = 'rgba(65, 105, 225, ' + Math.random() + ')';
  };

  for (var j = 0; j < times.length; j++) {
    if (names[j] === 'Вы') {
      ctx.fillStyle = colorRed;
    } else {
      getRandomBlueColor();
    }
    getRect(j, -times[j]);
    ctx.fillStyle = colorBlue;
    writeText(j, names[j]);
  }
};
