import db from "../../../db.json";

export default function WrongQuestion() {
  return (
    <div style={{ textAlign: "center", margin: "20px 0 30px 0" }}>
      <svg width="50" height="50">
        <g>
          <rect
            fill="none"
            id="WrongQuestion"
            height="52"
            width="52"
            y="-1"
            x="-1"
          />
        </g>
        <g>
          <path
            stroke="null"
            id="WrongQuestion_1"
            fillRule="evenodd"
            fill={db.theme.colors.wrong}
            d="m24.980699,49.797805c13.693557,0 24.794254,-11.109824 24.794254,-24.814638c0,-13.704752 -11.100698,-24.814638 -24.794254,-24.814638c-13.693495,0 -24.794254,11.109886 -24.794254,24.814638c0,13.704814 11.10076,24.814638 24.794254,24.814638zm-4.00703,-33.211632c-1.210363,-1.211327 -3.172704,-1.211327 -4.383066,0c-1.210332,1.211358 -1.210332,3.175312 0,4.38667l4.007061,4.010325l-4.007061,4.010356c-1.210332,1.211265 -1.210332,3.175343 0,4.386608c1.210362,1.211265 3.172704,1.211265 4.383066,0l4.00703,-4.010356l4.007061,4.010356c1.21027,1.211265 3.172735,1.211265 4.383004,0c1.21027,-1.211265 1.21027,-3.175343 0,-4.386608l-4.007061,-4.010356l4.007061,-4.010325c1.21027,-1.211358 1.21027,-3.175312 0,-4.38667c-1.21027,-1.211327 -3.172735,-1.211327 -4.383004,0l-4.007061,4.010356l-4.00703,-4.010356z"
            clipRule="evenodd"
          />
          <path
            id="WrongQuestion_2"
            d="m123.292838,80.161304l2.864642,-13.61034"
            opacity="0.5"
            fillOpacity="null"
            strokeOpacity="null"
            strokeWidth="null"
            stroke="null"
            fill={db.theme.colors.wrong}
          />
          <rect
            stroke="null"
            id="WrongQuestion_3"
            height="0"
            width="1.157408"
            y="80.450656"
            x="190.075335"
            fillOpacity="null"
            strokeOpacity="null"
            strokeWidth="null"
            fill={db.theme.colors.wrong}
          />
        </g>
      </svg>
    </div>
  );
}
