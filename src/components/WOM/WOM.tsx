type WOMSkill =
  | "overall"
  | "attack"
  | "defence"
  | "strength"
  | "hitpoints"
  | "ranged"
  | "prayer"
  | "magic"
  | "cooking"
  | "woodcutting"
  | "fletching"
  | "fishing"
  | "firemaking"
  | "crafting"
  | "smithing"
  | "mining"
  | "herblore"
  | "agility"
  | "thieving"
  | "slayer"
  | "farming"
  | "runecrafting"
  | "hunter"
  | "construction";

type WOMStat = "gained" | "start" | "end";

interface IWOMGain {
  metric: string;
  rank: {
    [key in WOMStat]: number;
  };
}

interface IWOMSkillGain extends IWOMGain {
  experience: {
    [key in WOMStat]: number;
  };
  ehp: {
    [key in WOMStat]: number;
  };
  level: {
    [key in WOMStat]: number;
  };
}

interface IWOMBossGain {
  ehb: {
    [key in WOMStat]: number;
  };
  kills: {
    [key in WOMStat]: number;
  };
}

interface IWOMActivitiesGain {
  score: {
    [key in WOMStat]: number;
  };
}

interface IWOMComputedGain {
  value: {
    [key in WOMStat]: number;
  };
}

interface IWOMDataObjects {
  skills: IWOMSkillGain[];
  bosses: {
    [key: string]: IWOMBossGain;
  }[];
  activities: {
    [key: string]: IWOMActivitiesGain;
  }[];
  computed: {
    [key: string]: IWOMComputedGain;
  }[];
}

interface IWOMGainedJSON {
  startsAt: string;
  endsAt: string;
  data: IWOMDataObjects;
}

export type {
  WOMSkill,
  WOMStat,
  IWOMGain,
  IWOMSkillGain,
  IWOMBossGain,
  IWOMActivitiesGain,
  IWOMComputedGain,
  IWOMDataObjects,
  IWOMGainedJSON,
};
