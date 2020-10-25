import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={227} height={269} viewBox="0 0 227 269" {...props}>
      <title>{"Group 9"}</title>
      <defs>
        <filter
          x="-4.5%"
          y="-1.4%"
          width="106.2%"
          height="104.4%"
          filterUnits="objectBoundingBox"
          id="prefix__a"
        >
          <feMorphology
            radius={0.81}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx={-6}
            dy={4}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feComposite
            in="shadowOffsetOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <filter
          x="-6%"
          y="-2.3%"
          width="108.6%"
          height="105.9%"
          filterUnits="objectBoundingBox"
          id="prefix__c"
        >
          <feMorphology
            radius={0.81}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx={-5}
            dy={3}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feComposite
            in="shadowOffsetOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <filter
          x="-13.7%"
          y="-5.7%"
          width="118.3%"
          height="117.1%"
          filterUnits="objectBoundingBox"
          id="prefix__e"
        >
          <feOffset
            dx={-2}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feComposite
            in="shadowOffsetOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <filter
          x="-2.3%"
          y="-2.9%"
          width="109.1%"
          height="111.4%"
          filterUnits="objectBoundingBox"
          id="prefix__g"
        >
          <feOffset
            dx={1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feComposite
            in="shadowOffsetOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <filter
          x="-55.5%"
          y="-9.3%"
          width="177.5%"
          height="148%"
          filterUnits="objectBoundingBox"
          id="prefix__i"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-55.5%"
          y="-9.3%"
          width="177.5%"
          height="148%"
          filterUnits="objectBoundingBox"
          id="prefix__j"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-12%"
          y="-7.4%"
          width="124.1%"
          height="114.8%"
          filterUnits="objectBoundingBox"
          id="prefix__l"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2={-1}
            k3={1}
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 1 0"
            in="shadowInnerInner1"
          />
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__m"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__n"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__o"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__p"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__q"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__r"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__s"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__t"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__u"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__v"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-44.4%"
          y="-20%"
          width="166.7%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__w"
        >
          <feOffset
            dx={-2}
            dy={2}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-44.4%"
          y="-20%"
          width="166.7%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__x"
        >
          <feOffset
            dx={-2}
            dy={2}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-44.4%"
          y="-20%"
          width="166.7%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__y"
        >
          <feOffset
            dx={-2}
            dy={2}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-44.4%"
          y="-20%"
          width="166.7%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__z"
        >
          <feOffset
            dx={-2}
            dy={2}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-44.4%"
          y="-20%"
          width="166.7%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__A"
        >
          <feOffset
            dx={-2}
            dy={2}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-44.4%"
          y="-20%"
          width="166.7%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__B"
        >
          <feOffset
            dx={-2}
            dy={2}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-44.4%"
          y="-20%"
          width="166.7%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__C"
        >
          <feOffset
            dx={-2}
            dy={2}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-2.5%"
          y="-2.1%"
          width="103.3%"
          height="108.2%"
          filterUnits="objectBoundingBox"
          id="prefix__D"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feComposite
            in="shadowOffsetOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <filter
          x="-29.4%"
          y="-4.9%"
          width="139.1%"
          height="116.3%"
          filterUnits="objectBoundingBox"
          id="prefix__G"
        >
          <feOffset
            dx={-3}
            dy={2}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feComposite
            in="shadowOffsetOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.866666667 0 0 0 0 0.890196078 0 0 0 0 0.909803922 0 0 0 1 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__I"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__J"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__L"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__M"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-42.1%"
          y="-5.7%"
          width="156.2%"
          height="117.1%"
          filterUnits="objectBoundingBox"
          id="prefix__N"
        >
          <feOffset
            dx={-2}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feComposite
            in="shadowOffsetOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <filter
          x="-29.4%"
          y="-4.9%"
          width="139.1%"
          height="116.3%"
          filterUnits="objectBoundingBox"
          id="prefix__P"
        >
          <feOffset
            dx={-3}
            dy={2}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feComposite
            in="shadowOffsetOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.866666667 0 0 0 0 0.890196078 0 0 0 0 0.909803922 0 0 0 1 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__R"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__S"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__U"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-50%"
          y="-10%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
          id="prefix__V"
        >
          <feOffset
            dx={-1}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          x="-42.1%"
          y="-5.7%"
          width="156.2%"
          height="117.1%"
          filterUnits="objectBoundingBox"
          id="prefix__W"
        >
          <feOffset
            dx={-2}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feComposite
            in="shadowOffsetOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <filter
          x="-14.6%"
          y="-6.2%"
          width="120.9%"
          height="121.4%"
          filterUnits="objectBoundingBox"
          id="prefix__Z"
        >
          <feMorphology
            radius={0.547}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx={-3}
            dy={3}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feComposite
            in="shadowOffsetOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.639215686 0 0 0 0 0.694117647 0 0 0 0 0.749019608 0 0 0 0.3 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <filter
          x="-34.2%"
          y="-11.4%"
          width="145.7%"
          height="134.2%"
          filterUnits="objectBoundingBox"
          id="prefix__aa"
        >
          <feOffset
            dx={-2}
            dy={1}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.596078431 0 0 0 0 0.647058824 0 0 0 0 0.701960784 0 0 0 1 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <path
          d="M0 131.5c0-29.712 2.002-61.194 6.007-94.445 2.225-18.473 17.225-32.78 35.782-34.13C68.622.976 91.041 0 109.044 0c18.09 0 40.799.985 68.129 2.954 18.572 1.338 33.589 15.656 35.809 34.144C216.994 70.51 219 102.083 219 131.813c0 29.66-1.997 61.03-5.99 94.114-2.23 18.474-17.237 32.778-35.797 34.12-27.238 1.969-49.735 2.953-67.491 2.953-17.794 0-40.43-.989-67.91-2.966-18.569-1.336-33.585-15.649-35.81-34.133C2 192.666 0 161.2 0 131.5z"
          id="prefix__b"
        />
        <path
          d="M39.654 130.992c0-20.899.881-41.798 2.643-62.697.97-11.504 9.9-20.738 21.366-22.091a388.15 388.15 0 0145.531-2.687c15.167 0 30.333.895 45.5 2.684 11.47 1.353 20.403 10.593 21.368 22.103a755.378 755.378 0 012.657 63.124c0 20.88-.88 41.76-2.64 62.638-.97 11.505-9.903 20.74-21.369 22.091a389.034 389.034 0 01-45.598 2.693c-15.145 0-30.291-.894-45.437-2.682-11.468-1.355-20.4-10.593-21.365-22.101a754.09 754.09 0 01-2.656-63.075z"
          id="prefix__d"
        />
        <path
          d="M161.51 89.858h15.333v17.534H161.51a6.568 6.568 0 01-6.567-6.568v-4.398a6.568 6.568 0 016.567-6.568z"
          id="prefix__f"
        />
        <path
          d="M183.958 89.858h15.332v17.534h-15.332a6.568 6.568 0 01-6.568-6.568v-4.398a6.568 6.568 0 016.568-6.568z"
          id="prefix__h"
        />
        <path
          d="M8.865 17.248a1.754 1.754 0 01-.77-1.454 1.75 1.75 0 011.748-1.754 1.75 1.75 0 011.747 1.754c0 .605-.305 1.139-.77 1.454l.976 2.737a.615.615 0 01-.579.82H8.468a.615.615 0 01-.579-.82l.976-2.737z"
          id="prefix__k"
        />
        <path id="prefix__E" d="M79.083 68.794h60.833v24.352H79.083z" />
        <path id="prefix__F" d="M119.233 71.235h18.25v19.507h-18.25z" />
        <path
          d="M6.692.215h8.762v30.683H6.692A6.568 6.568 0 01.124 24.33V6.782A6.568 6.568 0 016.692.215z"
          id="prefix__H"
        />
        <path
          d="M42.83 11.876v7.36c0 .69-.493 1.3-1.091 1.36l-24.095 2.083V8.433l24.095 2.084c.602.06 1.09.668 1.09 1.359z"
          id="prefix__K"
        />
        <path
          d="M6.692.215h8.762v30.683H6.692A6.568 6.568 0 01.124 24.33V6.782A6.568 6.568 0 016.692.215z"
          id="prefix__Q"
        />
        <path
          d="M42.83 11.876v7.36c0 .69-.493 1.3-1.091 1.36l-24.095 2.083V8.433l24.095 2.084c.602.06 1.09.668 1.09 1.359z"
          id="prefix__T"
        />
        <path
          d="M24.598 18.916c-1.887-.225-4.41-.546-5.998-.826-2.828-.498-8.375-1.863-8.375-1.863l-.793 4.498s5.701.552 8.518 1.048c1.365.241 3.377.703 5.086 1.114-.964 1.487-2.121 3.236-2.943 4.366-1.688 2.324-5.346 6.71-5.346 6.71l3.695 2.685s2.995-4.882 4.677-7.196c.84-1.158 2.196-2.832 3.338-4.213.981 1.507 2.148 3.335 2.864 4.575 1.436 2.487 3.956 7.613 3.956 7.613l3.955-2.283s-3.241-4.722-4.672-7.2c-.752-1.303-1.795-3.358-2.613-5.01 1.788-.483 4.046-1.073 5.526-1.388 2.81-.597 8.463-1.409 8.463-1.409l-.95-4.468s-5.492 1.624-8.29 2.219c-1.553.33-4.001.71-5.868.98-.105-1.888-.225-4.382-.225-5.972 0-2.872.381-8.57.381-8.57h-4.567s.446 5.71.446 8.57c0 1.609-.142 4.128-.265 6.02z"
          id="prefix__Y"
        />
        <rect
          id="prefix__O"
          x={12.23}
          y={6.79}
          width={7.117}
          height={17.533}
          rx={1.095}
        />
        <rect
          id="prefix__X"
          x={12.23}
          y={6.79}
          width={7.117}
          height={17.533}
          rx={1.095}
        />
        <ellipse id="prefix__ab" cx={26.803} cy={22.671} rx={4.38} ry={4.383} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(7 1)">
          <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
          <use
            stroke="#A3B1BF"
            strokeWidth={1.62}
            fill="#F0F2F5"
            xlinkHref="#prefix__b"
          />
          <use fill="#000" filter="url(#prefix__c)" xlinkHref="#prefix__d" />
          <use
            stroke="#A3B1BF"
            strokeWidth={1.62}
            fillOpacity={0.15}
            fill="#A3B1BF"
            xlinkHref="#prefix__d"
          />
          <use fill="#000" filter="url(#prefix__e)" xlinkHref="#prefix__f" />
          <use fill="#F0F2F5" xlinkHref="#prefix__f" />
          <path
            stroke="#A3B1BF"
            strokeWidth={1.62}
            d="M176.032 106.582V90.668H161.51a5.758 5.758 0 00-5.757 5.758v4.398a5.758 5.758 0 005.757 5.758h14.523z"
          />
          <g transform="matrix(-1 0 0 1 376.68 0)">
            <use fill="#000" filter="url(#prefix__g)" xlinkHref="#prefix__h" />
            <use fill="#F0F2F5" xlinkHref="#prefix__h" />
            <path
              stroke="#A3B1BF"
              strokeWidth={1.62}
              d="M198.48 106.582V90.668h-14.522a5.758 5.758 0 00-5.758 5.758v4.398a5.758 5.758 0 005.758 5.758h14.522z"
            />
          </g>
          <path
            d="M169.538 109.199h9.983v-2.882c.136.343-4.552 0-7.101 0l1.733-6.073c-2.547 0-4.615 2.05-4.615 4.579v4.376zm11.867-2.435l-.07-.935c-2.842.49-5.457 0-9.247 0l2.065-7.813c-3.787 0-6.861 3.048-6.861 6.807v1.941h-.422c-1.111 0-2.012.9-2.012 2.012v6.764a8.045 8.045 0 008.046 8.046h3.376a8.045 8.045 0 008.045-8.046v-6.764c0-1.111-.9-2.012-2.011-2.012h-.91z"
            fill="#D4DBE2"
            fillRule="nonzero"
          />
          <g filter="url(#prefix__i)" transform="translate(160.42 95.473)">
            <ellipse
              stroke="#D9D9D9"
              strokeWidth={1.095}
              fill="#F5F5F5"
              cx={2.19}
              cy={2.74}
              rx={2.19}
              ry={2.192}
            />
            <path fill="#D9D9D9" d="M3.781 4.39L1.171.497.224 2.09.101 4.39z" />
          </g>
          <g filter="url(#prefix__j)" transform="translate(189.26 95.473)">
            <ellipse
              stroke="#D9D9D9"
              strokeWidth={1.095}
              fill="#F5F5F5"
              cx={2.19}
              cy={2.74}
              rx={2.19}
              ry={2.192}
            />
            <path fill="#D9D9D9" d="M3.781 4.39L1.171.497.224 2.09.101 4.39z" />
          </g>
          <path
            d="M169.117 106.147v-1.598c0-3.411 2.216-6.3 5.272-7.274v3.576a4.378 4.378 0 00-1.866 3.595v1.7h8.643v-1.7a4.38 4.38 0 00-1.262-3.085v-3.698a7.633 7.633 0 014.3 6.886v1.599a2.011 2.011 0 011.946 2.01v6.972a8.045 8.045 0 01-8.045 8.046h-3.376a8.045 8.045 0 01-8.046-8.046v-6.972c0-1.11.9-2.011 2.012-2.011h.422z"
            stroke="#A3B1BF"
            strokeWidth={1.62}
            fill="#F0F2F5"
          />
          <g transform="translate(166.683 96.799)">
            <use fillOpacity={0.3} fill="#A3B1BF" xlinkHref="#prefix__k" />
            <use fill="#000" filter="url(#prefix__l)" xlinkHref="#prefix__k" />
          </g>
          <g filter="url(#prefix__m)" transform="translate(64 75)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.095}
              fill="#F5F5F5"
              cx={2.19}
              cy={2.74}
              rx={2.19}
              ry={2.192}
            />
            <path fill="#A3B1BF" d="M3.781 4.39L1.171.497.224 2.09.101 4.39z" />
          </g>
          <g filter="url(#prefix__n)" transform="translate(152 75)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.095}
              fill="#F5F5F5"
              cx={2.19}
              cy={2.74}
              rx={2.19}
              ry={2.192}
            />
            <path fill="#A3B1BF" d="M3.781 4.39L1.171.497.224 2.09.101 4.39z" />
          </g>
          <g filter="url(#prefix__o)" transform="translate(57 120)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.095}
              fill="#F5F5F5"
              cx={2.19}
              cy={2.74}
              rx={2.19}
              ry={2.192}
            />
            <path fill="#A3B1BF" d="M3.781 4.39L1.171.497.224 2.09.101 4.39z" />
          </g>
          <g filter="url(#prefix__p)" transform="translate(57 137)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.095}
              fill="#F5F5F5"
              cx={2.19}
              cy={2.74}
              rx={2.19}
              ry={2.192}
            />
            <path fill="#A3B1BF" d="M3.781 4.39L1.171.497.224 2.09.101 4.39z" />
          </g>
          <g filter="url(#prefix__q)" transform="translate(64 186)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.095}
              fill="#F5F5F5"
              cx={2.19}
              cy={2.74}
              rx={2.19}
              ry={2.192}
            />
            <path fill="#A3B1BF" d="M3.781 4.39L1.171.497.224 2.09.101 4.39z" />
          </g>
          <g filter="url(#prefix__r)" transform="translate(93 191)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.095}
              fill="#F5F5F5"
              cx={2.19}
              cy={2.74}
              rx={2.19}
              ry={2.192}
            />
            <path fill="#A3B1BF" d="M3.781 4.39L1.171.497.224 2.09.101 4.39z" />
          </g>
          <g filter="url(#prefix__s)" transform="translate(122 191)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.095}
              fill="#F5F5F5"
              cx={2.19}
              cy={2.74}
              rx={2.19}
              ry={2.192}
            />
            <path fill="#A3B1BF" d="M3.781 4.39L1.171.497.224 2.09.101 4.39z" />
          </g>
          <g filter="url(#prefix__t)" transform="translate(152 186)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.095}
              fill="#F5F5F5"
              cx={2.19}
              cy={2.74}
              rx={2.19}
              ry={2.192}
            />
            <path fill="#A3B1BF" d="M3.781 4.39L1.171.497.224 2.09.101 4.39z" />
          </g>
          <g filter="url(#prefix__u)" transform="translate(160.42 95.473)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.095}
              fill="#F5F5F5"
              cx={2.19}
              cy={2.74}
              rx={2.19}
              ry={2.192}
            />
            <path fill="#A3B1BF" d="M3.781 4.39L1.171.497.224 2.09.101 4.39z" />
          </g>
          <g filter="url(#prefix__v)" transform="translate(189.26 95.473)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.095}
              fill="#F7FAFC"
              cx={2.19}
              cy={2.74}
              rx={2.19}
              ry={2.192}
            />
            <path fill="#A3B1BF" d="M3.781 4.39L1.171.497.224 2.09.101 4.39z" />
          </g>
          <g filter="url(#prefix__w)" transform="translate(25 38)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.642}
              fill="#F7FAFC"
              cx={4.38}
              cy={4.931}
              rx={4.38}
              ry={4.383}
            />
            <path
              fill="#A3B1BF"
              d="M4.004 9.133l3.558-.9L2.343.445.446 3.63.79 7.806z"
            />
          </g>
          <g filter="url(#prefix__x)" transform="translate(25 218)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.642}
              fill="#F7FAFC"
              cx={4.38}
              cy={4.931}
              rx={4.38}
              ry={4.383}
            />
            <path
              fill="#A3B1BF"
              d="M4.004 9.133l3.558-.9L2.343.445.446 3.63.79 7.806z"
            />
          </g>
          <g filter="url(#prefix__y)" transform="translate(106 237)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.642}
              fill="#F7FAFC"
              cx={4.38}
              cy={4.931}
              rx={4.38}
              ry={4.383}
            />
            <path
              fill="#A3B1BF"
              d="M4.004 9.133l3.558-.9L2.343.445.446 3.63.79 7.806z"
            />
          </g>
          <g filter="url(#prefix__z)" transform="translate(185 219)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.642}
              fill="#F7FAFC"
              cx={4.38}
              cy={4.931}
              rx={4.38}
              ry={4.383}
            />
            <path
              fill="#A3B1BF"
              d="M4.004 9.133l3.558-.9L2.343.445.446 3.63.79 7.806z"
            />
          </g>
          <g filter="url(#prefix__A)" transform="translate(14.42 129.699)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.642}
              fill="#F7FAFC"
              cx={4.38}
              cy={4.931}
              rx={4.38}
              ry={4.383}
            />
            <path
              fill="#A3B1BF"
              d="M4.004 9.133l3.558-.9L2.343.445.446 3.63.79 7.806z"
            />
          </g>
          <g filter="url(#prefix__B)" transform="translate(105.444 20.716)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.642}
              fill="#F7FAFC"
              cx={4.38}
              cy={4.931}
              rx={4.38}
              ry={4.383}
            />
            <path
              fill="#A3B1BF"
              d="M4.004 9.133l3.558-.9L2.343.445.446 3.63.79 7.806z"
            />
          </g>
          <g filter="url(#prefix__C)" transform="translate(185.055 37.806)">
            <ellipse
              stroke="#A3B1BF"
              strokeWidth={1.642}
              fill="#F5F5F5"
              cx={4.38}
              cy={4.931}
              rx={4.38}
              ry={4.383}
            />
            <path
              fill="#A3B1BF"
              d="M4.004 9.133l3.558-.9L2.343.445.446 3.63.79 7.806z"
            />
          </g>
          <use fill="#000" filter="url(#prefix__D)" xlinkHref="#prefix__E" />
          <use fill="#F0F2F5" xlinkHref="#prefix__E" />
          <path
            stroke="#A3B1BF"
            strokeWidth={2.43}
            d="M80.298 70.009h58.403v21.922H80.298z"
          />
          <use fillOpacity={0.3} fill="#A3B1BF" xlinkHref="#prefix__F" />
          <rect
            fill="#A3B1BF"
            x={114.367}
            y={77.317}
            width={1.825}
            height={8.117}
            rx={0.912}
          />
          <rect
            fill="#A3B1BF"
            x={118.017}
            y={72.65}
            width={2.433}
            height={16.235}
            rx={1.217}
          />
          <g>
            <g transform="translate(25 88)">
              <use
                fill="#000"
                filter="url(#prefix__G)"
                xlinkHref="#prefix__H"
              />
              <use fill="#EAEFF3" xlinkHref="#prefix__H" />
              <path
                stroke="#A3B1BF"
                strokeWidth={1.62}
                d="M14.644 30.088V1.025H6.692A5.758 5.758 0 00.934 6.782V24.33a5.758 5.758 0 005.758 5.758h7.952z"
              />
            </g>
            <g filter="url(#prefix__I)" transform="translate(31.207 94.79)">
              <ellipse
                stroke="#A3B1BF"
                strokeWidth={1.095}
                fill="#F7FAFC"
                cx={2.19}
                cy={2.74}
                rx={2.19}
                ry={2.192}
              />
              <path
                fill="#A3B1BF"
                d="M3.781 4.39L1.171.497.224 2.09.101 4.39z"
              />
            </g>
            <g filter="url(#prefix__J)" transform="translate(31.543 107.182)">
              <ellipse
                stroke="#A3B1BF"
                strokeWidth={1.095}
                fill="#F7FAFC"
                cx={2.19}
                cy={2.74}
                rx={2.19}
                ry={2.192}
              />
              <path
                fill="#A3B1BF"
                d="M3.781 4.39L1.171.497.224 2.09.101 4.39z"
              />
            </g>
            <g transform="translate(25 88)">
              <use fill="#F0F2F5" xlinkHref="#prefix__K" />
              <path
                stroke="#A3B1BF"
                strokeWidth={1.62}
                d="M18.454 9.316v12.48l23.203-2.006c.165-.017.362-.262.362-.553v-7.361c0-.294-.195-.537-.35-.552L18.454 9.316z"
              />
            </g>
            <g filter="url(#prefix__L)" transform="translate(48 101)">
              <ellipse
                stroke="#A3B1BF"
                strokeWidth={1.095}
                fill="#F7FAFC"
                cx={2.19}
                cy={2.74}
                rx={2.19}
                ry={2.192}
              />
              <path
                fill="#A3B1BF"
                d="M3.781 4.39L1.171.497.224 2.09.101 4.39z"
              />
            </g>
            <g filter="url(#prefix__M)" transform="translate(58 101)">
              <ellipse
                stroke="#A3B1BF"
                strokeWidth={1.095}
                fill="#F7FAFC"
                cx={2.19}
                cy={2.74}
                rx={2.19}
                ry={2.192}
              />
              <path
                fill="#A3B1BF"
                d="M3.781 4.39L1.171.497.224 2.09.101 4.39z"
              />
            </g>
            <g transform="translate(25 88)">
              <use
                fill="#000"
                filter="url(#prefix__N)"
                xlinkHref="#prefix__O"
              />
              <use fill="#EAEFF3" xlinkHref="#prefix__O" />
              <rect
                stroke="#A3B1BF"
                strokeWidth={1.62}
                x={13.04}
                y={7.6}
                width={5.497}
                height={15.913}
                rx={1.095}
              />
            </g>
            <path
              d="M38.599 103.556h4.38"
              stroke="#A3B1BF"
              strokeWidth={2.189}
              strokeLinecap="square"
            />
          </g>
          <g>
            <g transform="translate(25 145)">
              <use
                fill="#000"
                filter="url(#prefix__P)"
                xlinkHref="#prefix__Q"
              />
              <use fill="#EAEFF3" xlinkHref="#prefix__Q" />
              <path
                stroke="#A3B1BF"
                strokeWidth={1.62}
                d="M14.644 30.088V1.025H6.692A5.758 5.758 0 00.934 6.782V24.33a5.758 5.758 0 005.758 5.758h7.952z"
              />
            </g>
            <g filter="url(#prefix__R)" transform="translate(31.207 151.79)">
              <ellipse
                stroke="#A3B1BF"
                strokeWidth={1.095}
                fill="#F7FAFC"
                cx={2.19}
                cy={2.74}
                rx={2.19}
                ry={2.192}
              />
              <path
                fill="#A3B1BF"
                d="M3.781 4.39L1.171.497.224 2.09.101 4.39z"
              />
            </g>
            <g filter="url(#prefix__S)" transform="translate(31.543 164.182)">
              <ellipse
                stroke="#A3B1BF"
                strokeWidth={1.095}
                fill="#F7FAFC"
                cx={2.19}
                cy={2.74}
                rx={2.19}
                ry={2.192}
              />
              <path
                fill="#A3B1BF"
                d="M3.781 4.39L1.171.497.224 2.09.101 4.39z"
              />
            </g>
            <g transform="translate(25 145)">
              <use fill="#F0F2F5" xlinkHref="#prefix__T" />
              <path
                stroke="#A3B1BF"
                strokeWidth={1.62}
                d="M18.454 9.316v12.48l23.203-2.006c.165-.017.362-.262.362-.553v-7.361c0-.294-.195-.537-.35-.552L18.454 9.316z"
              />
            </g>
            <g filter="url(#prefix__U)" transform="translate(48 158)">
              <ellipse
                stroke="#A3B1BF"
                strokeWidth={1.095}
                fill="#F7FAFC"
                cx={2.19}
                cy={2.74}
                rx={2.19}
                ry={2.192}
              />
              <path
                fill="#A3B1BF"
                d="M3.781 4.39L1.171.497.224 2.09.101 4.39z"
              />
            </g>
            <g filter="url(#prefix__V)" transform="translate(58 158)">
              <ellipse
                stroke="#A3B1BF"
                strokeWidth={1.095}
                fill="#F7FAFC"
                cx={2.19}
                cy={2.74}
                rx={2.19}
                ry={2.192}
              />
              <path
                fill="#A3B1BF"
                d="M3.781 4.39L1.171.497.224 2.09.101 4.39z"
              />
            </g>
            <g transform="translate(25 145)">
              <use
                fill="#000"
                filter="url(#prefix__W)"
                xlinkHref="#prefix__X"
              />
              <use fill="#EAEFF3" xlinkHref="#prefix__X" />
              <rect
                stroke="#A3B1BF"
                strokeWidth={1.62}
                x={13.04}
                y={7.6}
                width={5.497}
                height={15.913}
                rx={1.095}
              />
            </g>
            <path
              d="M38.599 160.556h4.38"
              stroke="#A3B1BF"
              strokeWidth={2.189}
              strokeLinecap="square"
            />
          </g>
        </g>
        <path
          d="M164.669 178.731c-12.398 0-22.448-10.058-22.448-22.465 0-12.406 10.05-22.464 22.448-22.464 12.397 0 22.447 10.058 22.447 22.464 0 12.407-10.05 22.465-22.447 22.465zm0-6.575c8.769 0 15.877-7.114 15.877-15.89 0-8.775-7.108-15.89-15.877-15.89-8.77 0-15.878 7.115-15.878 15.89 0 8.776 7.109 15.89 15.878 15.89z"
          fillOpacity={0.3}
          fill="#A3B1BF"
        />
        <g transform="translate(142.185 132.5)">
          <use fill="#000" filter="url(#prefix__Z)" xlinkHref="#prefix__Y" />
          <use
            stroke="#A3B1BF"
            strokeWidth={1.095}
            fill="#A3B1BF"
            xlinkHref="#prefix__Y"
          />
        </g>
        <path
          d="M163.11 133.506a22.515 22.515 0 014.803-.516c12.398 0 22.448 10.058 22.448 22.465 0 10.862-7.704 19.924-17.943 22.012l-2.403-6.26c7.776-1.03 13.776-7.69 13.776-15.752 0-8.776-7.109-15.89-15.878-15.89a15.796 15.796 0 00-8.976 2.781l-1.083-2.82 5.255-6.02z"
          fill="#98A5B3"
        />
        <path
          d="M168.988 177.635c-12.398 0-22.448-10.058-22.448-22.464 0-12.407 10.05-22.465 22.448-22.465 12.397 0 22.447 10.058 22.447 22.465 0 12.406-10.05 22.464-22.447 22.464zm0-6.575c8.769 0 15.877-7.114 15.877-15.89 0-8.775-7.108-15.889-15.877-15.889-8.769 0-15.878 7.114-15.878 15.89 0 8.775 7.109 15.89 15.878 15.89z"
          fill="#A3B1BF"
        />
        <path
          d="M179.754 138.974s2.787 1.59 5.432 6.022c2.644 4.432 2.986 8.99 2.986 8.99"
          stroke="#F7FAFC"
          strokeWidth={1.62}
          strokeLinecap="round"
        />
        <g transform="translate(142.185 132.5)">
          <use fill="#000" filter="url(#prefix__aa)" xlinkHref="#prefix__ab" />
          <use fill="#A3B1BF" xlinkHref="#prefix__ab" />
        </g>
        <path
          d="M171.213 156.862a2.434 2.434 0 00-3.321-3.562s1.204.368 2.12 1.351c.918.984 1.201 2.21 1.201 2.21z"
          fill="#F7FAFC"
        />
      </g>
    </svg>
  );
}

const UnAuthorizedImage = React.memo(SvgComponent);
export default UnAuthorizedImage;
