/**
 * @packageDocumentation
 * @module api.functional.bbs.articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { IBbsArticle } from "../../../structures/bbs/IBbsArticle";
import type { IPage } from "../../../structures/common/IPage";
import { NestiaSimulator } from "../../../utils/NestiaSimulator";

/**
 * List up entire articles, but paginated and summarized.
 * 
 * This method is for listing up summarized articles with pagination.
 * 
 * If you want, you can search and sort articles with specific conditions.
 * 
 * @param section Target section
 * @param input Pagination request info with searching and sorting options
 * @returns Paged articles witb summarization
 * 
 * @controller BbsArticlesController.index
 * @path PATCH /bbs/articles/:section
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
    connection: IConnection,
    section: string,
    input: index.Input,
): Promise<index.Output> {
    return !!connection.simulate
        ? index.simulate(
              connection,
              section,
              input,
          )
        : PlainFetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              {
                  ...index.METADATA,
                  path: index.path(section),
              } as const,
              input,
          );
}
export namespace index {
    export type Input = Primitive<IBbsArticle.IRequest>;
    export type Output = Primitive<IPage<IBbsArticle.ISummary>>;

    export const METADATA = {
        method: "PATCH",
        path: "/bbs/articles/:section",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: string): string => {
        return `/bbs/articles/${encodeURIComponent(section ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IPage<IBbsArticle.ISummary>> =>
        typia.random<Primitive<IPage<IBbsArticle.ISummary>>>(g);
    export const simulate = async (
        connection: IConnection,
        section: string,
        input: index.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(section),
            contentType: "application/json",
        });
        assert.param("section")(() => typia.assert(section));
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * Get an article with detailed info.
 * 
 * Open an article with detailed info, increasing reading count.
 * 
 * @param section Target section
 * @param id Target articles id
 * @returns Detailed article info
 * 
 * @controller BbsArticlesController.at
 * @path GET /bbs/articles/:section/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
    connection: IConnection,
    section: string,
    id: string,
): Promise<at.Output> {
    return !!connection.simulate
        ? at.simulate(
              connection,
              section,
              id,
          )
        : PlainFetcher.fetch(
              connection,
              {
                  ...at.METADATA,
                  path: at.path(section, id),
              } as const,
          );
}
export namespace at {
    export type Output = Primitive<IBbsArticle>;

    export const METADATA = {
        method: "GET",
        path: "/bbs/articles/:section/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: string, id: string): string => {
        return `/bbs/articles/${encodeURIComponent(section ?? "null")}/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IBbsArticle> =>
        typia.random<Primitive<IBbsArticle>>(g);
    export const simulate = async (
        connection: IConnection,
        section: string,
        id: string,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(section, id),
            contentType: "application/json",
        });
        assert.param("section")(() => typia.assert(section));
        assert.param("id")(() => typia.assert(id));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * Store a new article.
 * 
 * Store a new article and returns its detailed record info.
 * 
 * @param section Target section
 * @param input New article info
 * @returns Newly created article info
 * 
 * @controller BbsArticlesController.store
 * @path POST /bbs/articles/:section
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
    connection: IConnection,
    section: string,
    input: store.Input,
): Promise<store.Output> {
    return !!connection.simulate
        ? store.simulate(
              connection,
              section,
              input,
          )
        : PlainFetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              {
                  ...store.METADATA,
                  path: store.path(section),
              } as const,
              input,
          );
}
export namespace store {
    export type Input = Primitive<IBbsArticle.IStore>;
    export type Output = Primitive<IBbsArticle>;

    export const METADATA = {
        method: "POST",
        path: "/bbs/articles/:section",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: string): string => {
        return `/bbs/articles/${encodeURIComponent(section ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IBbsArticle> =>
        typia.random<Primitive<IBbsArticle>>(g);
    export const simulate = async (
        connection: IConnection,
        section: string,
        input: store.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(section),
            contentType: "application/json",
        });
        assert.param("section")(() => typia.assert(section));
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * Update article.
 * 
 * When updating, this BBS system does not overwrite the content, but accumulate it.
 * Therefore, whenever an article being updated, length of {@link IBbsArticle.snapshots }
 * would be increased and accumulated.
 * 
 * @param section Target section
 * @param id Target articles id
 * @param input Content to update
 * @returns Newly created content info
 * 
 * @controller BbsArticlesController.update
 * @path PUT /bbs/articles/:section/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
    connection: IConnection,
    section: string,
    id: string & Format<"uuid">,
    input: update.Input,
): Promise<update.Output> {
    return !!connection.simulate
        ? update.simulate(
              connection,
              section,
              id,
              input,
          )
        : PlainFetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              {
                  ...update.METADATA,
                  path: update.path(section, id),
              } as const,
              input,
          );
}
export namespace update {
    export type Input = Primitive<IBbsArticle.IUpdate>;
    export type Output = Primitive<IBbsArticle.ISnapshot>;

    export const METADATA = {
        method: "PUT",
        path: "/bbs/articles/:section/:id",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (section: string, id: string & Format<"uuid">): string => {
        return `/bbs/articles/${encodeURIComponent(section ?? "null")}/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<IBbsArticle.ISnapshot> =>
        typia.random<Primitive<IBbsArticle.ISnapshot>>(g);
    export const simulate = async (
        connection: IConnection,
        section: string,
        id: string & Format<"uuid">,
        input: update.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(section, id),
            contentType: "application/json",
        });
        assert.param("section")(() => typia.assert(section));
        assert.param("id")(() => typia.assert(id));
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}