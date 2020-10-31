"use strict";

import { yellow } from "chalk";
import GlobalData from "@/core/global/global-data";
import IEventHandler from "@Lib/interfaces/core/event-handler-interface";

/**
 * Server-init handler
 */
export default class ServerInitHandler implements IEventHandler {
  /**
   * Get handler name
   */
  getEventName(): string {
    return "ServerInit";
  }

  /**
   * Boot event
   * @param payload any Payload object
   */
  public async register(payload: any): Promise<void> {
    GlobalData.logger.info(
      `${yellow(this.getEventName())} event-handler registered successfully`
    );
  }

  /**
   * Handle method
   * @param payload any Payload data
   */
  public async handle(payload: any): Promise<void> {
    GlobalData.logger.info(
      `${yellow(this.getEventName())} Server Initialized successfully\n\t${
        payload.readyAt
      }`
    );
  }
}