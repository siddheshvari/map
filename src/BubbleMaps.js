/**
 * Bubble sample
 */
import { world_map } from "./world_map.ts";
import * as React from "react";
import {
  MapsComponent,
  Inject,
  LayersDirective,
  LayerDirective,
  Bubble,
  BubblesDirective,
  BubbleDirective,
  MapsTooltip,
  Zoom,
} from "@syncfusion/ej2-react-maps";
import { internetUsers } from "./population-data";
import * as data from "./data.json";
let datasource = data;
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
function BubbleMaps() {
  let mapInstance;
  function bubbleRendering(args) {
    args.radius = args.data.value;
  }
  function onMapsLoad(args) {
    let maps = document.getElementById("maps");
    maps.setAttribute("title", "");
  }
  function load(args) {}
  return (
    <div className="control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section row">
        <div className="col-md-12">
          <MapsComponent
            id="maps"
            loaded={onMapsLoad.bind(this)}
            load={load}
            ref={(m) => (mapInstance = m)}
            useGroupingSeparator={true}
            format={"n"}
            zoomSettings={{
              enable: true,
              horizontalAlignment: "Near",
              toolBarOrientation: "Vertical",
              toolbars: ["ZoomIn", "ZoomOut", "Reset"],
              pinchZooming: true,
            }}
            bubbleRendering={bubbleRendering.bind(this)}
            titleSettings={{
              text: "Top countries with highest Data Usage",
              textStyle: {
                size: "16px",
              },
            }}
          >
            <Inject services={[Bubble, MapsTooltip, Zoom]} />
            <LayersDirective>
              <LayerDirective
                shapeData={world_map}
                shapePropertyPath="name"
                shapeDataPath="name"
                dataSource={datasource}
                shapeSettings={{
                  fill: "#E5E5E5",
                }}
              >
                <BubblesDirective>
                  <BubbleDirective
                    dataSource={internetUsers}
                    visible={true}
                    valuePath="value"
                    colorValuePath="color"
                    minRadius={3}
                    maxRadius={70}
                    opacity={0.8}
                    tooltipSettings={{
                      visible: true,
                      valuePath: "data",
                      template:
                        '<div id="bubbletooltiptemplate" style="width: 165px;background: rgba(53, 63, 76, 0.90); opacity: 90%;background: rgba(53, 63, 76, 0.90);box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);padding: 10px;border: 1px #abb9c6;border-radius: 4px;">' +
                        '<div style="font-size:13px;color:#ffffff;font-weight: 500;"><center>${name}</center></div>' +
                        '<hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">' +
                        '<div><span style="font-size:13px;color:#cccccc">Id : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${id}</span></div>' +
                        '<div><span style="font-size:13px;color:#cccccc">Data Usage : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${data}</span></div></div>',
                    }}
                  ></BubbleDirective>
                </BubblesDirective>
              </LayerDirective>
            </LayersDirective>
          </MapsComponent>
        </div>
      </div>
    </div>
  );
}
export default BubbleMaps;
