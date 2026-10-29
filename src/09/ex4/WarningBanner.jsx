
import React from "react";

function WarningBanner({ warning }) {
    // 경고가 비활성화된 경우 아무것도 표시하지 않음
    if (!warning) {
        return null;
    }

    return (
        <div
            className="signal-warning-banner"
            role="alert"
        >
            <div className="signal-warning-top">
                <div className="signal-warning-icon">
                    <span aria-hidden="true">!</span>
                </div>

                <span className="signal-warning-tag">
          WARNING DETECTED
        </span>

                <span
                    className="signal-warning-indicator"
                    aria-hidden="true"
                />
            </div>

            <div className="signal-warning-content">
                <p className="signal-warning-overline">
                    SYSTEM NOTIFICATION
                </p>

                <h3>경고가 활성화되었습니다.</h3>

                <p className="signal-warning-description">
                    현재 알림 메시지가 표시되고 있습니다.
                    <br />
                    아래 버튼을 클릭하면 경고를 감출 수 있습니다.
                </p>
            </div>

            <div className="signal-warning-bottom">
                <span>ALERT STATUS</span>

                <span className="signal-warning-live">
          <span className="signal-warning-live-dot" />
          LIVE
        </span>
            </div>
        </div>
    );
}

export default WarningBanner;
