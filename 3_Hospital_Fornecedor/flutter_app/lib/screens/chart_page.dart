import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';

import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';

// resiliency configuration [polly resilience framework](requisita a cada 2 segundos e para apos 4 vezes)
// circuit-breaker [polly resilience framework] (checa o estado a cada 30 segundos e permite ate 100 requisicoes)
// IaC infraestrutura como codigo [Terraform]

class LineChartSample5 extends StatelessWidget {
  final List<int> showIndexes = const [1, 3, 5];
  final List<FlSpot> allSpots = [
    FlSpot(0, 1),
    FlSpot(1, 2),
    FlSpot(2, 1.5),
    FlSpot(3, 3),
    FlSpot(4, 3.5),
    FlSpot(5, 5),
    FlSpot(6, 8),
  ];

  @override
  Widget build(BuildContext context) {
    final lineBarsData = [
      LineChartBarData(
          showingIndicators: showIndexes,
          spots: allSpots,
          isCurved: true,
          barWidth: 4,
          shadow: const Shadow(
            blurRadius: 8,
            color: Colors.black,
          ),
          belowBarData: BarAreaData(
            show: true,
            colors: [
              const Color(0xff12c2e9).withOpacity(0.4),
              const Color(0xffc471ed).withOpacity(0.4),
              const Color(0xfff64f59).withOpacity(0.4),
            ],
          ),
          dotData: FlDotData(show: false),
          colors: [
            const Color(0xff12c2e9),
            const Color(0xffc471ed),
            const Color(0xfff64f59),
          ],
          colorStops: [
            0.1,
            0.4,
            0.9
          ]),
    ];

    final LineChartBarData tooltipsOnBar = lineBarsData[0];

    return SizedBox(
      width: 300,
      height: 140,
      child: LineChart(
        LineChartData(
          showingTooltipIndicators: showIndexes.map((index) {
            return ShowingTooltipIndicators(index, [
              LineBarSpot(
                  tooltipsOnBar, lineBarsData.indexOf(tooltipsOnBar), tooltipsOnBar.spots[index]),
            ]);
          }).toList(),
          lineTouchData: LineTouchData(
            enabled: false,
            getTouchedSpotIndicator: (LineChartBarData barData, List<int> spotIndexes) {
              return spotIndexes.map((index) {
                return TouchedSpotIndicatorData(
                  FlLine(
                    color: Colors.pink,
                  ),
                  FlDotData(
                    show: true,
                    getDotPainter: (spot, percent, barData, index) => FlDotCirclePainter(
                      radius: 8,
                      color: lerpGradient(barData.colors, barData.colorStops, percent / 100),
                      strokeWidth: 2,
                      strokeColor: Colors.black,
                    ),
                  ),
                );
              }).toList();
            },
            touchTooltipData: LineTouchTooltipData(
              tooltipBgColor: Colors.pink,
              tooltipRoundedRadius: 8,
              getTooltipItems: (List<LineBarSpot> lineBarsSpot) {
                return lineBarsSpot.map((lineBarSpot) {
                  return LineTooltipItem(
                    lineBarSpot.y.toString(),
                    const TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                  );
                }).toList();
              },
            ),
          ),
          lineBarsData: lineBarsData,
          minY: 0,
          titlesData: FlTitlesData(
            leftTitles: SideTitles(
              showTitles: false,
            ),
            bottomTitles: SideTitles(
                showTitles: true,
                getTitles: (val) {
                  switch (val.toInt()) {
                    case 0:
                      return '00:00';
                    case 1:
                      return '01:00';
                    case 2:
                      return '02:00';
                    case 3:
                      return '03:00';
                    case 4:
                      return '04:00';
                    case 5:
                      return '05:00';
                    case 6:
                      return '06:00';
                  }
                  return '';
                },
                getTextStyles: (value) => const TextStyle(
                  fontWeight: FontWeight.bold,
                  color: Colors.blueGrey,
                  fontFamily: 'Digital',
                  fontSize: 18,
                )),
          ),
          axisTitleData: FlAxisTitleData(
            rightTitle: AxisTitle(showTitle: true, titleText: 'count'),
            leftTitle: AxisTitle(showTitle: true, titleText: 'count'),
            topTitle:
            AxisTitle(showTitle: true, titleText: 'Wall clock', textAlign: TextAlign.left),
          ),
          gridData: FlGridData(show: false),
          borderData: FlBorderData(
            show: true,
          ),
        ),
      ),
    );
  }
}

/// Lerps between a [LinearGradient] colors, based on [t]
Color lerpGradient(List<Color> colors, List<double> stops, double t) {
  if (stops == null || stops.length != colors.length) {
    stops = [];

    /// provided gradientColorStops is invalid and we calculate it here
    colors.asMap().forEach((index, color) {
      final percent = 1.0 / colors.length;
      stops.add(percent * index);
    });
  }

  for (var s = 0; s < stops.length - 1; s++) {
    final leftStop = stops[s], rightStop = stops[s + 1];
    final leftColor = colors[s], rightColor = colors[s + 1];
    if (t <= leftStop) {
      return leftColor;
    } else if (t < rightStop) {
      final sectionT = (t - leftStop) / (rightStop - leftStop);
      return Color.lerp(leftColor, rightColor, sectionT);
    }
  }
  return colors.last;
}

// class LineChartSample2 extends StatefulWidget {
//   @override
//   _LineChartSample2State createState() => _LineChartSample2State();
// }
//
// class _LineChartSample2State extends State<LineChartSample2> {
//   List<Color> gradientColors = [
//     const Color(0xff23b6e6),
//     const Color(0xff02d39a),
//   ];
//
//   bool showAvg = false;
//
//   @override
//   Widget build(BuildContext context) {
//     return Stack(
//       children: <Widget>[
//         AspectRatio(
//           aspectRatio: 1.70,
//           child: Container(
//             decoration: const BoxDecoration(
//                 borderRadius: BorderRadius.all(
//                   Radius.circular(18),
//                 ),
//                 color: Color(0xffffffff)),  // 0xff232d37
//             child: Padding(
//               padding: const EdgeInsets.only(right: 18.0, left: 12.0, top: 24, bottom: 12),
//               child: LineChart(
//                 showAvg ? avgData() : mainData(),
//               ),
//             ),
//           ),
//         ),
//         SizedBox(
//           width: 60,
//           height: 34,
//           child: FlatButton(
//             onPressed: () {
//               setState(() {
//                 showAvg = !showAvg;
//               });
//             },
//             child: Text(
//               'avg',
//               style: TextStyle(
//                   fontSize: 12, color: showAvg ? Colors.white.withOpacity(0.5) : Colors.white),
//             ),
//           ),
//         ),
//       ],
//     );
//   }
//
//   LineChartData mainData() {
//     return LineChartData(
//       gridData: FlGridData(
//         show: true,
//         drawVerticalLine: true,
//         getDrawingHorizontalLine: (value) {
//           return FlLine(
//             color: const Color(0xff37434d),
//             strokeWidth: 1,
//           );
//         },
//         getDrawingVerticalLine: (value) {
//           return FlLine(
//             color: const Color(0xff37434d),
//             strokeWidth: 1,
//           );
//         },
//       ),
//       titlesData: FlTitlesData(
//         show: true,
//         bottomTitles: SideTitles(
//           showTitles: true,
//           reservedSize: 22,
//           getTextStyles: (value) =>
//           const TextStyle(color: Color(0xff68737d), fontWeight: FontWeight.bold, fontSize: 16),
//           getTitles: (value) {
//             switch (value.toInt()) {
//               case 2:
//                 return 'MAR';
//               case 5:
//                 return 'JUN';
//               case 8:
//                 return 'SEP';
//             }
//             return '';
//           },
//           margin: 8,
//         ),
//         leftTitles: SideTitles(
//           showTitles: true,
//           getTextStyles: (value) => const TextStyle(
//             color: Color(0xff67727d),
//             fontWeight: FontWeight.bold,
//             fontSize: 15,
//           ),
//           getTitles: (value) {
//             switch (value.toInt()) {
//               case 1:
//                 return '10k';
//               case 3:
//                 return '30k';
//               case 5:
//                 return '50k';
//             }
//             return '';
//           },
//           reservedSize: 28,
//           margin: 12,
//         ),
//       ),
//       borderData:
//       FlBorderData(show: true, border: Border.all(color: const Color(0xff37434d), width: 1)),
//       minX: 0,
//       maxX: 11,
//       minY: 0,
//       maxY: 6,
//       lineBarsData: [
//         LineChartBarData(
//           spots: [
//             FlSpot(0, 3),
//             FlSpot(2.6, 2),
//             FlSpot(4.9, 5),
//             FlSpot(6.8, 3.1),
//             FlSpot(8, 4),
//             FlSpot(9.5, 3),
//             FlSpot(11, 4),
//           ],
//           isCurved: true,
//           colors: gradientColors,
//           barWidth: 5,
//           isStrokeCapRound: true,
//           dotData: FlDotData(
//             show: false,
//           ),
//           belowBarData: BarAreaData(
//             show: true,
//             colors: gradientColors.map((color) => color.withOpacity(0.3)).toList(),
//           ),
//         ),
//       ],
//     );
//   }
//
//   LineChartData avgData() {
//     return LineChartData(
//       lineTouchData: LineTouchData(enabled: false),
//       gridData: FlGridData(
//         show: true,
//         drawHorizontalLine: true,
//         getDrawingVerticalLine: (value) {
//           return FlLine(
//             color: const Color(0xff37434d),
//             strokeWidth: 1,
//           );
//         },
//         getDrawingHorizontalLine: (value) {
//           return FlLine(
//             color: const Color(0xff37434d),
//             strokeWidth: 1,
//           );
//         },
//       ),
//       titlesData: FlTitlesData(
//         show: true,
//         bottomTitles: SideTitles(
//           showTitles: true,
//           reservedSize: 22,
//           getTextStyles: (value) =>
//           const TextStyle(color: Color(0xff68737d), fontWeight: FontWeight.bold, fontSize: 16),
//           getTitles: (value) {
//             switch (value.toInt()) {
//               case 2:
//                 return 'MAR';
//               case 5:
//                 return 'JUN';
//               case 8:
//                 return 'SEP';
//             }
//             return '';
//           },
//           margin: 8,
//         ),
//         leftTitles: SideTitles(
//           showTitles: true,
//           getTextStyles: (value) => const TextStyle(
//             color: Color(0xff67727d),
//             fontWeight: FontWeight.bold,
//             fontSize: 15,
//           ),
//           getTitles: (value) {
//             switch (value.toInt()) {
//               case 1:
//                 return '10k';
//               case 3:
//                 return '30k';
//               case 5:
//                 return '50k';
//             }
//             return '';
//           },
//           reservedSize: 28,
//           margin: 12,
//         ),
//       ),
//       borderData:
//       FlBorderData(show: true, border: Border.all(color: const Color(0xff37434d), width: 1)),
//       minX: 0,
//       maxX: 11,
//       minY: 0,
//       maxY: 6,
//       lineBarsData: [
//         LineChartBarData(
//           spots: [
//             FlSpot(0, 3.44),
//             FlSpot(2.6, 3.44),
//             FlSpot(4.9, 3.44),
//             FlSpot(6.8, 3.44),
//             FlSpot(8, 3.44),
//             FlSpot(9.5, 3.44),
//             FlSpot(11, 3.44),
//           ],
//           isCurved: true,
//           colors: [
//             ColorTween(begin: gradientColors[0], end: gradientColors[1]).lerp(0.2),
//             ColorTween(begin: gradientColors[0], end: gradientColors[1]).lerp(0.2),
//           ],
//           barWidth: 5,
//           isStrokeCapRound: true,
//           dotData: FlDotData(
//             show: false,
//           ),
//           belowBarData: BarAreaData(show: true, colors: [
//             ColorTween(begin: gradientColors[0], end: gradientColors[1]).lerp(0.2).withOpacity(0.1),
//             ColorTween(begin: gradientColors[0], end: gradientColors[1]).lerp(0.2).withOpacity(0.1),
//           ]),
//         ),
//       ],
//     );
//   }
// }