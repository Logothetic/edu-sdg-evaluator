import { SDGSection } from "@/types/evaluation";
import { calculateScore, getRecommendations } from "./utils/calculations";
import { sdg1Section } from "./sdgSections/sdg1";
import { sdg2Section } from "./sdgSections/sdg2";
import { sdg3Section } from "./sdgSections/sdg3";
import { sdg4Section } from "./sdgSections/sdg4";
import { sdg5Section } from "./sdgSections/sdg5";
import { sdg6Section } from "./sdgSections/sdg6";
import { sdg7Section } from "./sdgSections/sdg7";
import { sdg9Section } from "./sdgSections/sdg9";
import { sdg10Section } from "./sdgSections/sdg10";
import { sdg11Section } from "./sdgSections/sdg11";
import { sdg12Section } from "./sdgSections/sdg12";
import { sdg13Section } from "./sdgSections/sdg13";
import { sdg14Section } from "./sdgSections/sdg14";
import { sdg15Section } from "./sdgSections/sdg15";
import { sdg16Section } from "./sdgSections/sdg16";
import { sdg17Section } from "./sdgSections/sdg17";

export const sdgSections: SDGSection[] = [
  sdg1Section,
  sdg2Section,
  sdg3Section,
  sdg4Section,
  sdg5Section,
  sdg6Section,
  sdg7Section,
  sdg9Section,
  sdg10Section,
  sdg11Section,
  sdg12Section,
  sdg13Section,
  sdg14Section,
  sdg15Section,
  sdg16Section,
  sdg17Section,
];

export { calculateScore, getRecommendations };
