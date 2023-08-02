import { HttpError } from "http-errors";
import { CheerioAPI, SelectorType } from "cheerio";
import { Anime, Top10Anime, Top10AnimeTimePeriod } from "../models";
export declare const USER_AGENT_HEADER: string | undefined;
export declare const ACCEPT_HEADER: string | undefined;
export declare const ACCEPT_ENCODING_HEADER: string | undefined;
export declare const SRC_BASE_URL: string | undefined;
export declare const SRC_AJAX_URL: string | undefined;
export declare const SRC_HOME_URL: string | undefined;
export declare const SRC_SEARCH_URL: string | undefined;
export declare function extractAnimes($: CheerioAPI, selector: SelectorType): Array<Anime> | HttpError;
export declare function extractTop10Animes($: CheerioAPI, period: Top10AnimeTimePeriod): Array<Top10Anime> | HttpError;
