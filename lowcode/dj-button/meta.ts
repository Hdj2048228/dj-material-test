
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const DjButtonMeta: ComponentMetadata = {
  "componentName": "DjButton",
  "title": "DjButton",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "dj-material-test",
    "version": "0.1.0",
    "exportName": "DjButton",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "type",
            "zh-CN": "类型"
          },
          "tip": "type | 类型"
        },
        "name": "type",
        "description": "类型",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "normal",
                "value": "normal"
              }
            ],
            "options": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "normal",
                "value": "normal"
              }
            ]
          },
          "initialValue": "primary"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "color",
            "zh-CN": "color"
          }
        },
        "name": "color",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "string",
                "value": "string"
              }
            ],
            "options": [
              {
                "label": "string",
                "value": "string"
              }
            ]
          },
          "initialValue": "string"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "size",
            "zh-CN": "按钮的尺寸"
          },
          "tip": "size | 按钮的尺寸"
        },
        "name": "size",
        "description": "按钮的尺寸",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "small",
                "value": "small"
              },
              {
                "label": "medium",
                "value": "medium"
              },
              {
                "label": "large",
                "value": "large"
              }
            ],
            "options": [
              {
                "label": "small",
                "value": "small"
              },
              {
                "label": "medium",
                "value": "medium"
              },
              {
                "label": "large",
                "value": "large"
              }
            ]
          },
          "initialValue": "small"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "icons",
            "zh-CN": "按钮中 Icon 的"
          },
          "tip": "icons | 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小"
        },
        "name": "icons",
        "description": "按钮中 Icon 的尺寸，用于替代 Icon 的默认大小",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "loading",
                      "zh-CN": "loading"
                    }
                  },
                  "name": "loading",
                  "setter": {
                    "componentName": "SlotSetter",
                    "props": {
                      "mode": "node"
                    },
                    "isRequired": false,
                    "initialValue": {
                      "type": "JSSlot",
                      "value": []
                    }
                  }
                }
              ],
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "iconSize",
            "zh-CN": "按钮中 Icon 的"
          },
          "tip": "iconSize | 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小"
        },
        "name": "iconSize",
        "description": "按钮中 Icon 的尺寸，用于替代 Icon 的默认大小",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "SelectSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "small",
                      "value": "small"
                    },
                    {
                      "label": "medium",
                      "value": "medium"
                    },
                    {
                      "label": "large",
                      "value": "large"
                    },
                    {
                      "label": "xxs",
                      "value": "xxs"
                    },
                    {
                      "label": "xs",
                      "value": "xs"
                    },
                    {
                      "label": "xl",
                      "value": "xl"
                    },
                    {
                      "label": "xxl",
                      "value": "xxl"
                    },
                    {
                      "label": "xxxl",
                      "value": "xxxl"
                    },
                    {
                      "label": "inherit",
                      "value": "inherit"
                    }
                  ],
                  "options": [
                    {
                      "label": "small",
                      "value": "small"
                    },
                    {
                      "label": "medium",
                      "value": "medium"
                    },
                    {
                      "label": "large",
                      "value": "large"
                    },
                    {
                      "label": "xxs",
                      "value": "xxs"
                    },
                    {
                      "label": "xs",
                      "value": "xs"
                    },
                    {
                      "label": "xl",
                      "value": "xl"
                    },
                    {
                      "label": "xxl",
                      "value": "xxl"
                    },
                    {
                      "label": "xxxl",
                      "value": "xxxl"
                    },
                    {
                      "label": "inherit",
                      "value": "inherit"
                    }
                  ]
                },
                "initialValue": "small"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "htmlType",
            "zh-CN": "当 componen"
          },
          "tip": "htmlType | 当 component = 'button' 时，设置 button 标签的 type 值"
        },
        "name": "htmlType",
        "description": "当 component = 'button' 时，设置 button 标签的 type 值",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "submit",
                "value": "submit"
              },
              {
                "label": "reset",
                "value": "reset"
              },
              {
                "label": "button",
                "value": "button"
              }
            ],
            "options": [
              {
                "label": "submit",
                "value": "submit"
              },
              {
                "label": "reset",
                "value": "reset"
              },
              {
                "label": "button",
                "value": "button"
              }
            ]
          },
          "initialValue": "submit"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "component",
            "zh-CN": "设置标签类型"
          },
          "tip": "component | 设置标签类型"
        },
        "name": "component",
        "description": "设置标签类型",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "node"
          },
          "isRequired": false,
          "initialValue": {
            "type": "JSSlot",
            "value": []
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "loading",
            "zh-CN": "设置按钮的载入状态"
          },
          "tip": "loading | 设置按钮的载入状态"
        },
        "name": "loading",
        "description": "设置按钮的载入状态",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "ghost",
            "zh-CN": "是否为幽灵按钮"
          },
          "tip": "ghost | 是否为幽灵按钮"
        },
        "name": "ghost",
        "description": "是否为幽灵按钮",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "light",
                      "value": "light"
                    },
                    {
                      "label": "dark",
                      "value": "dark"
                    }
                  ],
                  "options": [
                    {
                      "label": "light",
                      "value": "light"
                    },
                    {
                      "label": "dark",
                      "value": "dark"
                    }
                  ]
                },
                "initialValue": "light"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "text",
            "zh-CN": "是否为文本按钮"
          },
          "tip": "text | 是否为文本按钮"
        },
        "name": "text",
        "description": "是否为文本按钮",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "warning",
            "zh-CN": "是否为警告按钮"
          },
          "tip": "warning | 是否为警告按钮"
        },
        "name": "warning",
        "description": "是否为警告按钮",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "disabled",
            "zh-CN": "是否禁用"
          },
          "tip": "disabled | 是否禁用"
        },
        "name": "disabled",
        "description": "是否禁用",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onClick",
            "zh-CN": "点击按钮的回调"
          },
          "tip": "onClick | 点击按钮的回调"
        },
        "name": "onClick",
        "description": "点击按钮的回调",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "href",
            "zh-CN": "在Button组件使"
          },
          "tip": "href | 在Button组件使用component属性值为a时有效，代表链接页面的URL"
        },
        "name": "href",
        "description": "在Button组件使用component属性值为a时有效，代表链接页面的URL",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "target",
            "zh-CN": "在Button组件使"
          },
          "tip": "target | 在Button组件使用component属性值为a时有效，代表何处打开链接文档"
        },
        "name": "target",
        "description": "在Button组件使用component属性值为a时有效，代表何处打开链接文档",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "autoFocus",
            "zh-CN": "autoFocus"
          }
        },
        "name": "autoFocus",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "form",
            "zh-CN": "form"
          }
        },
        "name": "form",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formAction",
            "zh-CN": "formAction"
          }
        },
        "name": "formAction",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formEncType",
            "zh-CN": "formEncType"
          }
        },
        "name": "formEncType",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formMethod",
            "zh-CN": "formMethod"
          }
        },
        "name": "formMethod",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formNoValidate",
            "zh-CN": "formNoValidate"
          }
        },
        "name": "formNoValidate",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formTarget",
            "zh-CN": "formTarget"
          }
        },
        "name": "formTarget",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "name",
            "zh-CN": "name"
          }
        },
        "name": "name",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "value",
            "zh-CN": "value"
          }
        },
        "name": "value",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
                  }
                },
                "initialValue": []
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "prefix",
            "zh-CN": "样式类名的品牌前缀"
          },
          "tip": "prefix | 样式类名的品牌前缀"
        },
        "name": "prefix",
        "description": "样式类名的品牌前缀",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "locale",
            "zh-CN": "国际化文案对象，属性"
          },
          "tip": "locale | 国际化文案对象，属性为组件的 displayName"
        },
        "name": "locale",
        "description": "国际化文案对象，属性为组件的 displayName",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "pure",
            "zh-CN": "是否开启 Pure "
          },
          "tip": "pure | 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用"
        },
        "name": "pure",
        "description": "是否开启 Pure Render 模式，会提高性能，但是也会带来副作用",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rtl",
            "zh-CN": "是否开启 rtl 模"
          },
          "tip": "rtl | 是否开启 rtl 模式"
        },
        "name": "rtl",
        "description": "是否开启 rtl 模式",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      }
    ],
    "supports": {
      "style": true,
      "className": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "DjButton",
    "screenshot": "",
    "schema": {
      "componentName": "DjButton",
      "props": {}
    }
  }
];

export default {
  ...DjButtonMeta,
  snippets
};
