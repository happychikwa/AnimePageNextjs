type AnimeType = {
  data: AnimeData[]
}
type AnimeData = {
        id: string;
        type: string;
        links: {
          self: string;
        },
        attributes: {
          createdAt: string;
          updatedAt: string;
          slug: string;
          synopsis: string;
          coverImageTopOffset: interger;
          titles: {
            en: string;
            en_jp: string;
            ja_jp: string;
          },
          canonicalTitle: string;
          abbreviatedTitles: [
            string
          ],
          averageRating: number,
          ratingFrequencies: {
            2: string,
            3: string,
            4: string,
            5:number,
            6: number,
            7:number,
            8: number,
            9:number,
            10: number,
            11:number,
            12: number,
            13: number,
            14: number,
            15: number,
            16: number,
            17: number,
            18: number,
            19: number,
            20: number
          },
          userCount: number,
          favoritesCount: number,
          startDate: string,
          endDate: string,
          popularityRank: number
          ratingRank: number;
          ageRating: string;
          ageRatingGuide: string;
          subtype: string;
          status: string;
          tba: string;
          posterImage: {
            tiny: string;
            small: string;
            medium: string;
            large: string;
            original: string;
            meta: {
              dimensions: {
                tiny: {
                  width: number;
                  height: number;
                },
                small: {
                  width: number;
                  height: number;
                },
                medium: {
                  width: number;
                  height: number;
                },
                large: {
                  width: number;
                  height: number;
                }
              }
            }
          },
          coverImage: {
            tiny: string;
            small: string;
            large: string;
            original: string;
            meta: {
              dimensions: {
                tiny: {
                  width: number
                  height: number;
                },
                small: {
                  width: number
                  height: number;
                },
                large: {
                  width: number;
                  height: number;
                }
              }
            }
          },
          episodeCount: number;
          episodeLength: number,
          youtubeVideoId: string;
          showType: string;
          nsfw: boolean
        },
        relationships: {
          genres: {
            links: {
              self: string;
              related: string;
            }
          },
          categories: {
            links: {
              self: string;
              related: string;
            }
          },
          castings: {
            links: {
              self: string;
              related: string;
          },
          installments: {
            links: {
              self: string;
              related:string;
            }
          },
          mappings: {
            links: {
              self: string;
              related: string;
          },
          reviews: {
            links: {
              self: string;
              related: string;
            }
          },
          mediaRelationships: {
            links: {
              self: string;
              related: string;
            }
          },
          episodes: {
            links: {
              self: string;
              related: string;
            }
          },
          streamingLinks: {
            links: {
              self: string;
              related: string;
            }
          },
          animeProductions: {
            links: {
              self: string;
              related: string;
            }
          },
          animeCharacters: {
            links: {
              self: string;
              related:string;
            }
          },
          animeStaff: {
            links: {
              self: string;
              related: string;
            }
          }
        }
      }
    }
  };