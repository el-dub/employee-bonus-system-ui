export function useConfigDefinition() {
  const configDefinition = {
    sections: [
      // {
      //   name: "company",
      //   label: "Company",
      //   header: "Company Appearance",
      //   icon: ["fas", "building"],
      //   configurations: [
      //     {
      //       label: "Name",
      //       description: "Your company name",
      //       component: "TextInputCard",
      //       dbType: "appearance",
      //       dbRule: "name",
      //       defaultValue: "",
      //     },
      //     {
      //       label: "Logo",
      //       description:
      //         "We recommend uploading at minimum a 350x160 transparent .PNG",
      //       component: "TextInputCard",
      //       dbType: "appearance",
      //       dbRule: "logo",
      //       defaultValue: "https://placekitten.com/g/30/30",
      //     },
      //   ],
      // },
      {
        name: "allowance",
        label: "Allowance",
        header: "Allowance Settings",
        icon: ["fas", "coins"],
        configurations: [
          {
            label: "Budget",
            description:
              "Enable this setting to give monthly allowance budget for everyone",
            component: "NumberInputCard",
            dbType: "allowance",
            dbRule: "budget",
            defaultValue: null,
            text: "Monthly Budget Allowance",
            inputDefault: "200",
          },
          {
            label: "Giveable",
            description:
              "Enable this setting to give monthly allowance giveable for everyone",
            component: "NumberInputCard",
            dbType: "allowance",
            dbRule: "giveable",
            defaultValue: null,
            text: "Monthly Giveable Allowance",
            inputDefault: "200",
          },
        ],
      },
      {
        name: "users",
        label: "Users",
        header: "Manage Users",
        icon: ["fas", "users"],
        configurations: [],
      },
      {
        name: "recognition-rules",
        label: "Reward Rules",
        header: "Manage Recognition Rules",
        icon: ["fas", "pen-ruler"],
        configurations: [],
      },
      {
        name: "custom-bonuses",
        label: "Custom Bonuses",
        header: "Custom Bonuses",
        icon: ["fas", "award"],
        configurations: [
          // {
          //   label: "Custom Bonuses",
          //   description:
          //       "Enable this setting to be able to add custom bonuses for your company",
          //   component: "CustomBonusCard",
          //   dbType: "bonus",
          //   dbRule: "custom",
          //   text: "Monthly Budget Allowance",
          //   configurations: [
          //     {
          //
          //     }
          //   ]
          // },
          // {
          //   label: "Giveable",
          //   description:
          //       "Enable this setting to give monthly allowance giveable for everyone",
          //   component: "NumberInputCard",
          //   dbType: "allowance",
          //   dbRule: "giveable",
          //   defaultValue: null,
          //   text: "Monthly Giveable Allowance",
          //   inputDefault: "200",
          // },
        ],
      },
    ],
  };

  return {
    configDefinition,
  };
}
