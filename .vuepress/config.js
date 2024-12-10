module.exports = {
  title: "Steven Weaver",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Github", link: "https://github.com/stevenweaver" },
      { text: "Twitter", link: "https://twitter.com/stvnwvr" },
    ],
    sidebar: {
      "/av/": [
        ["", "Books, Audio, and Visual"],
        "does-the-internet-dream",
        "bubblegum-crisis-goofs",
        "home-videos",
      ],
      "/": [
        ["publications", "Publications"],
        ["misc/quotations", "Quotes"],
        ["tutorials/reviewbrah", "Tutorials - Review Brah Ratings"],
        ["tutorials/kraken", "Tutorials - Kraken"],
        ["av/", "Books, Audio, and Visual"],
      ],
    },
  },
};
