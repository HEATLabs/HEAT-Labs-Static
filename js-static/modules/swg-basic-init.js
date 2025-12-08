(self.SWG_BASIC = self.SWG_BASIC || []).push(basicSubscriptions => {
  basicSubscriptions.init({
    type: "NewsArticle",
    isPartOfType: ["Product"],
    isPartOfProductId: "CAowvc_EDA:openaccess",
    clientOptions: { theme: "light", lang: "en" },
  });
});