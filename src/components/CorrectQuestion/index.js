import db from "../../../db.json";

export default function CorrectQuestion() {
  return (
    <div style={{textAlign: "center", margin: "20px 0 30px 0"}}>
      <svg width="50" height="50">
        <g>
          <rect
            fill="none"
            id="CorrectQuestion"
            height="52"
            width="52"
            y="-1"
            x="-1"
          />
        </g>
        <g>
          <path
            stroke="null"
            id="CorrectQuestion_1"
            fill={db.theme.colors.success}
            d="m24.969667,0.218688a24.905857,24.793787 0 1 0 24.905857,24.793787a24.905857,24.793787 0 0 0 -24.905857,-24.793787zm11.730658,19.11601l-12.452928,12.396894a2.490586,2.479379 0 0 1 -3.536632,0l-4.981171,-4.958757a2.490586,2.479379 0 0 1 3.536632,-3.520718l3.212855,3.223192l10.684612,-10.661329a2.490586,2.479379 0 0 1 3.536632,3.520718z"
          />
        </g>
      </svg>
    </div>
  );
}
