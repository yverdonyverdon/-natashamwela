export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "";

// ID가 없는 경우
export const existsGaId = GA_ID !== "";

// PV 측정
export const pageview = (path) => {
  window.gtag("config", GA_ID, {
    page_path: path,
  });
};

// GA 이벤트 발화
export const event = ({ action, category, label, value = "" }) => {
  if (!existsGaId) {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};
