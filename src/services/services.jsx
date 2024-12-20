export const footerQuery = `
query footer($locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
    footer(fallbackLocales: $fallbackLocales, locale: $locale)  {
      description
      img1 {
        alt
        url
      }
      img2 {
        alt
        url
      }
      img3 {
        alt
        url
      }
      img4 {
        alt
        url
      }
      link1
      link2
      link3
      link4
      link5
      title
      title2
    }
  }
`;
export const headerQuery = `
query header($locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
    header(fallbackLocales: $fallbackLocales, locale: $locale) {
      link1
      link2
      link3
      link4
      link5
      link6
      link7
      link8
    }
  }
`;
export const homePageQuery = `
     query homepage($locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
    homepage(locale: $locale, fallbackLocales: $fallbackLocales) {
      btn1WhoI
      btn2Who1
      btnPortfolio
      btnSectionPortfolio
      btnServices
      btonContacts
      descPortfolio
      descServices
      descServices2
      descServices3
      descWhoI
      description
      header
      headerPortfolio
      headerServices
      imgServices {
        alt
        url
      }
      imgServices2 {
        alt
        url
      }
      imgServices3 {
        alt
        url
      }
      subtitlePortfolio
      subtitleServices
      subtitleWhiI
      titleServices
      titleServices2
      titleServices3
      titleWhoI
      galleryPortfolio {
        alt
        url
      }
      avatar {
        alt
        url
      }
    }
  }`;

export const portfoliopostQuery = `  query portfoliopost($slug: String!, $locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
    portfoliopost(filter: { slug: { eq: $slug } }, locale: $locale, fallbackLocales: $fallbackLocales) {
      id
      title
      description
      slug
      gallery { url }
      coverImage { url }
    }
  }`;

export const allPortfolioPostsQuery = `
query allPortfolioposts($locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
    allPortfolioposts {    

    id
    slug
    title(fallbackLocales: $fallbackLocales, locale: $locale)
    description(fallbackLocales: $fallbackLocales, locale: $locale)
    btnReadMore(fallbackLocales: $fallbackLocales, locale: $locale)
    coverImage {
      url
    }
  }
    } `;
export const allServicesQuery = `
query allServices($locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
    allServices {                   
                    btn(fallbackLocales: $fallbackLocales, locale: $locale)
                    btn2(fallbackLocales: $fallbackLocales, locale: $locale)
                    btn3(fallbackLocales: $fallbackLocales, locale: $locale)

                    price1
                    price2
                    price3
                    formaction(fallbackLocales: $fallbackLocales, locale: $locale)

                    desc(fallbackLocales: $fallbackLocales, locale: $locale)
                    desc2(fallbackLocales: $fallbackLocales, locale: $locale)
                    desc3(fallbackLocales: $fallbackLocales, locale: $locale)
                    description(fallbackLocales: $fallbackLocales, locale: $locale)
                    header(fallbackLocales: $fallbackLocales, locale: $locale)
                    horizontalTitle2(fallbackLocales: $fallbackLocales, locale: $locale)
                    horizontalTitle(fallbackLocales: $fallbackLocales, locale: $locale)
                    horizontalTitle3(fallbackLocales: $fallbackLocales, locale: $locale)
                    img {
                      alt(fallbackLocales: $fallbackLocales, locale: $locale)
                      url
                      title(fallbackLocales: $fallbackLocales, locale: $locale)
                      size
                    }
                    img2 {
                      alt(fallbackLocales: en, locale: en)
                      size
                      url
                      title(fallbackLocales: $fallbackLocales, locale: $locale)
                    }
                    img3 {
                      alt(fallbackLocales: $fallbackLocales, locale: $locale)
                      url
                      title(fallbackLocales: $fallbackLocales, locale: $locale)
                    }
                    title(fallbackLocales: $fallbackLocales, locale: $locale)
                    title2(fallbackLocales: $fallbackLocales, locale: $locale)
                    title3(fallbackLocales: $fallbackLocales, locale: $locale)
                  }
                }
`;

// new

export const threeDVisualizationQuery = `
query threeDVisualization($locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
    threeDVisualization(locale: $locale, fallbackLocales: $fallbackLocales) {
        btn
        desc
        description
        header
        horizontalTitle
        img {
            alt
            url
            title
            size
        }
        title
    }
}
`;

export const interiorDesignQuery = `
query interiorDesign($locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
    interiorDesign(locale: $locale, fallbackLocales: $fallbackLocales) {
        btn
        desc
        description
        header
        horizontalTitle
        img {
            alt
            url
            title
            size
        }
        title
    }
}
`;

export const furniturePlanningQuery = `
query furniturePlanning($locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
    furniturePlanning(locale: $locale, fallbackLocales: $fallbackLocales) {
        btn
        desc
        description
        header
        horizontalTitle
        img {
            alt
            url
            title
            size
        }
        title
    }
}
`;

//

export const allAboutsQuery = `
query  AllAbouts($locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
    allAbouts{
              answerFaq1(locale: $locale)
                    answerFaq1Copy2(locale: $locale)
                    answerFaq1Copy3(locale: $locale)
                    answerFaq1Copy4(locale: $locale)

                    answerFaq1Copy5(locale: $locale)
                    answerFaq1Copy6(locale: $locale)
                    answerFaq1Copy7(locale: $locale)
                    answerFaq1Copy8(locale: $locale)
                    answerFaq1Copy9(locale: $locale)
                    answerFaq1Copy10(locale: $locale)

                    description(locale: $locale)
                    avatar {
                      _createdAt
                      alt(fallbackLocales: en, locale: en)
                      author
                      filename
                      url
                    }
                    header(fallbackLocales: $fallbackLocales, locale: $locale)
                    headerFaq(fallbackLocales: $fallbackLocales, locale: $locale)
                    headerResults(fallbackLocales: $fallbackLocales, locale: $locale)
                    label(fallbackLocales: $fallbackLocales, locale: $locale)
                    labelResult1(fallbackLocales: $fallbackLocales, locale: $locale)
                    labelResult1Copy1(fallbackLocales: $fallbackLocales, locale: $locale)
                    labelResult1Copy2(fallbackLocales: $fallbackLocales, locale: $locale)
                    labelResult1Copy3(fallbackLocales: $fallbackLocales, locale: $locale)
                    questionFaq1(fallbackLocales: $fallbackLocales, locale: $locale)
                    questionFaq1Copy1(fallbackLocales: $fallbackLocales, locale: $locale)
                    questionFaq1Copy2(fallbackLocales: $fallbackLocales, locale: $locale)
                    questionFaq1Copy3(fallbackLocales: $fallbackLocales, locale: $locale)

                    questionFaq1Copy4(fallbackLocales: $fallbackLocales, locale: $locale)
                    questionFaq1Copy5(fallbackLocales: $fallbackLocales, locale: $locale)
                    questionFaq1Copy6(fallbackLocales: $fallbackLocales, locale: $locale)
                    questionFaq1Copy7(fallbackLocales: $fallbackLocales, locale: $locale)
                    questionFaq1Copy8(fallbackLocales: $fallbackLocales, locale: $locale)
                    questionFaq1Copy9(fallbackLocales: $fallbackLocales, locale: $locale)
                    
                    subtitle(fallbackLocales: $fallbackLocales, locale: $locale)
                    descriptionResults(fallbackLocales: $fallbackLocales, locale: $locale)
                    descriptionCopy1(fallbackLocales: $fallbackLocales, locale: $locale)
                    descriptionCopy2(fallbackLocales: $fallbackLocales, locale: $locale)
                    descriptionCopy3(fallbackLocales: $fallbackLocales, locale: $locale)
                  }
                }
`;
export const allContactsQuery = `
query AllContacts($locale: SiteLocale!, $fallbackLocales: [SiteLocale!]!) {
    allContacts {
      label(fallbackLocales: $fallbackLocales, locale: $locale)
      placeholderEmail(fallbackLocales: $fallbackLocales, locale: $locale)
      message(fallbackLocales: $fallbackLocales, locale: $locale)
      placeholderName(fallbackLocales: $fallbackLocales, locale: $locale)
      placeholderPhone(fallbackLocales: $fallbackLocales, locale: $locale)
      socialText(fallbackLocales: $fallbackLocales, locale: $locale)
      btn(fallbackLocales: $fallbackLocales, locale: $locale)

      header(fallbackLocales: $fallbackLocales, locale: $locale)
    }
  }
`;
export const allSlidesQuery = `
query slider {
  slider {
    slider {
      alt
      url
    }
  }
  }
`;
