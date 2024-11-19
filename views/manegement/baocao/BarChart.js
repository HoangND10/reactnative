import React, { PureComponent } from "react";
import { Svg, G, Line, Text, Path } from "react-native-svg";
import * as d3 from "d3";
import { Dimensions } from "react-native";

// Lấy kích thước màn hình hiện tại
const { width, height } = Dimensions.get("window");

// Kiểm tra thiết bị có phải iPad không
const isTablet = width >= 768;

const GRAPH_MARGIN = 20;
const GRAPH_BAR_WIDTH = 9;
const colors = {
  axis: "#DCDCDC",
  bars: "#D8ECDA",
  selected: "#30B153",
  width: "#30B153",
};

export default class BarChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedBar: null, // Lưu trữ cột được chọn
    };
  }

  handleBarPress = (label) => {
    this.setState({ selectedBar: label }); // Cập nhật cột được chọn
  };

  render() {
    const SVGHeight = isTablet ? 420 : 320;
    const SVGWidth = isTablet ? 1000 : 350;
    const graphHeight = isTablet ? 350 : 250;
    const graphWidth = isTablet ? 1000 : 320;
    const { data } = this.props;

    const xDomain = data.map((item) => item.label);
    const xRange = [0, graphWidth + 25];
    const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

    const yDomain = isTablet ? [0, 120] : [0, 60]; // Đặt giá trị tối đa là 60
    const yRange = [graphHeight, 0];
    const y = d3.scaleLinear().domain(yDomain).range(yRange);

    return (
      <Svg width={SVGWidth} height={SVGHeight}>
        <G y={GRAPH_MARGIN}>
          {/* Vẽ các đường ngang và nhãn cho trục Y */}
          {(isTablet
            ? [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
            : [0, 10, 20, 30, 40, 50, 60]
          ).map((value) => (
            <G key={value}>
              <Line
                x1="30"
                y1={y(value)}
                x2={graphWidth}
                y2={y(value)}
                stroke={colors.axis}
                strokeDasharray={[3, 3]}
                strokeWidth="0.5"
              />
              <Text
                x="0"
                y={y(value)}
                fontSize="12"
                fill="grey"
                textAnchor="start"
                alignmentBaseline="middle"
              >
                {value}
              </Text>
            </G>
          ))}

          {/* Vẽ các thanh biểu đồ với bo góc */}
          {data.map((item) => (
            <G key={item.label} onPress={() => this.handleBarPress(item.label)}>
              <Path
                d={`M${x(item.label) - GRAPH_BAR_WIDTH / 2},${y(item.value) + 5}
                  A5,5 0 0 1 ${x(item.label) - GRAPH_BAR_WIDTH / 2 + 5},${y(
                  item.value
                )}
                  L${x(item.label) + GRAPH_BAR_WIDTH / 2 - 5},${y(item.value)}
                  A5,5 0 0 1 ${x(item.label) + GRAPH_BAR_WIDTH / 2},${
                  y(item.value) + 5
                }
                  L${x(item.label) + GRAPH_BAR_WIDTH / 2},${graphHeight}
                  L${x(item.label) - GRAPH_BAR_WIDTH / 2},${graphHeight}
                  Z`}
                fill={
                  this.state.selectedBar === item.label
                    ? colors.selected
                    : colors.bars
                }
                stroke={colors.width}
                strokeWidth="1"
              />
              {/* Hiển thị icon với số bên trong nếu cột được chọn */}
              {this.state.selectedBar === item.label && (
                <G
                  x={x(item.label) - 16.5} // Căn chỉnh vị trí icon
                  y={y(item.value) - 37}
                >
                  <Path
                    d="M5.5 11.4928L7.5 14.4909L9.5 11.4928H13.5C14.053 11.4928 14.5 11.0461 14.5 10.4935V1.49935C14.5 0.946709 14.053 0.5 13.5 0.5H1.5C0.947 0.5 0.5 0.946709 0.5 1.49935V10.4935C0.5 11.0461 0.947 11.4928 1.5 11.4928H5.5Z"
                    fill="white"
                    stroke="#C5C5C5"
                    transform="scale(2.2)" // Điều chỉnh scale để phù hợp với icon
                  />
                  <Text
                    x="16.5"
                    y="13.5"
                    fontSize="16"
                    fill="black"
                    textAnchor="middle"
                    alignmentBaseline="central"
                  >
                    {item.value} {/* Giá trị của cột */}
                  </Text>
                </G>
              )}
            </G>
          ))}

          {/* Nhãn trục X */}
          {data.map((item) => (
            <Text
              key={`label${item.label}`}
              fontSize="12"
              x={x(item.label)}
              y={graphHeight + 30}
              textAnchor="middle"
              fill="grey"
              transform={
                isTablet
                  ? `rotate(310, ${x(item.label)}, ${graphHeight + 40})`
                  : undefined
              }
            >
              {item.label}
            </Text>
          ))}
        </G>
      </Svg>
    );
  }
}
