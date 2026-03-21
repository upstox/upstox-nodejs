# Upstox Developer API – Example Code

This folder contains **ready-to-use Node.js samples** for the [Upstox API](https://upstox.com/developer/api-documentation/open-api). Each example shows how to call the API using the official [Upstox Node.js SDK](https://www.npmjs.com/package/upstox-js-sdk) (`upstox-js-sdk`).

## Why use these samples?

- **Quick start** — Copy-paste examples for common flows (login, orders, market data, portfolio).
- **Correct usage** — Request/response patterns, error handling, and API version usage as recommended by Upstox.
- **Reference** — See how to structure `PlaceOrderRequest`, historical data params, and other API payloads.

Use these samples to build trading apps, dashboards, or integrations without guessing request shapes or SDK usage.

## Prerequisites

- **Node.js** 10+
- **SDK**: `npm install upstox-js-sdk`
- **Upstox developer account** and API credentials (client ID, client secret, redirect URI).
- **Access token** for authenticated APIs (obtain via [Login API](login/) samples).

For full setup, sandbox mode, and auth flow, see the main [Upstox Node.js SDK README](../README.md) in the repo root.

## Folder structure

Samples are grouped by API area. Each `.md` file contains one or more Node.js snippets you can run after replacing placeholders like `{your_access_token}` and `{your_client_id}`.

| Folder | Description |
|--------|-------------|
| [**login/**](login/) | Authentication: get token from auth code, access-token request, logout. |
| [**user/**](user/) | User profile, fund and margin details. |
| [**orders/**](orders/) | Order lifecycle: place (single/multi, v2 & v3), modify, cancel, order book, order details, order history, trades, historical trades, exit all positions. |
| [**portfolio/**](portfolio/) | Positions, holdings, MTF positions, convert positions. |
| [**market-quote/**](market-quote/) | LTP, full market quotes, OHLC (v2 & v3), option Greeks. |
| [**historical-data/**](historical-data/) | Historical and intraday candle data (v2 & v3). |
| [**option-chain/**](option-chain/) | Option contracts, put-call option chain. |
| [**expired-instruments/**](expired-instruments/) | Expiries, expired future/option contracts, expired historical candle data. |
| [**market-information/**](market-information/) | Exchange status, market timings, market holidays. |
| [**gtt-orders/**](gtt-orders/) | Place, modify, cancel, and get details for GTT (Good Till Triggered) orders. |
| [**margins/**](margins/) | Margin details. |
| [**charges/**](charges/) | Brokerage details. |
| [**trade-profit-and-loss/**](trade-profit-and-loss/) | P&L report, report metadata, trade charges. |
| [**strategies/**](strategies/) | Ready-to-run options strategy examples for Nifty 50 (bullish, bearish, neutral, others). |

### Options Strategies

Each strategy script searches for the required Nifty 50 option legs using the Instruments API and places market orders via the v3 Order API.

#### [Bullish](strategies/bullish/)

| File | Strategy | Legs |
|------|----------|------|
| [buy_call.js](strategies/bullish/code/buy_call.js) | **Buy Call** | BUY ATM CE |
| [sell_put.js](strategies/bullish/code/sell_put.js) | **Sell Put** | SELL ATM PE |
| [bull_call_spread.js](strategies/bullish/code/bull_call_spread.js) | **Bull Call Spread** | BUY ATM CE + SELL ATM+1 CE |
| [bull_put_spread.js](strategies/bullish/code/bull_put_spread.js) | **Bull Put Spread** | SELL ATM PE + BUY ATM-1 PE |
| [bull_butterfly.js](strategies/bullish/code/bull_butterfly.js) | **Bull Butterfly** | BUY ATM CE + SELL 2× ATM+1 CE + BUY ATM+2 CE |
| [bull_condor.js](strategies/bullish/code/bull_condor.js) | **Bull Condor** | BUY ATM CE + SELL ATM+1 CE + SELL ATM+2 CE + BUY ATM+3 CE |
| [long_calendar_call.js](strategies/bullish/code/long_calendar_call.js) | **Long Calendar with Calls** | SELL current-week ATM CE + BUY next-week ATM CE |
| [long_synthetic_future.js](strategies/bullish/code/long_synthetic_future.js) | **Long Synthetic Future** | BUY ATM CE + SELL ATM PE |
| [call_ratio_back_spread.js](strategies/bullish/code/call_ratio_back_spread.js) | **Call Ratio Back Spread** | SELL 1× ATM CE + BUY 2× ATM+1 CE |
| [range_forward.js](strategies/bullish/code/range_forward.js) | **Range Forward** | SELL ATM-1 PE + BUY ATM+1 CE |

#### [Bearish](strategies/bearish/)

| File | Strategy | Legs |
|------|----------|------|
| [buy_put.js](strategies/bearish/code/buy_put.js) | **Buy Put** | BUY ATM PE |
| [sell_call.js](strategies/bearish/code/sell_call.js) | **Sell Call** | SELL ATM CE |
| [bear_call_spread.js](strategies/bearish/code/bear_call_spread.js) | **Bear Call Spread** | SELL ATM CE + BUY ATM+1 CE |
| [bear_put_spread.js](strategies/bearish/code/bear_put_spread.js) | **Bear Put Spread** | BUY ATM PE + SELL ATM-1 PE |
| [bear_butterfly.js](strategies/bearish/code/bear_butterfly.js) | **Bear Butterfly** | BUY ATM PE + SELL 2× ATM-1 PE + BUY ATM-2 PE |
| [bear_condor.js](strategies/bearish/code/bear_condor.js) | **Bear Condor** | BUY ATM PE + SELL ATM-1 PE + SELL ATM-2 PE + BUY ATM-3 PE |
| [long_calendar_put.js](strategies/bearish/code/long_calendar_put.js) | **Long Calendar with Puts** | SELL current-week ATM PE + BUY next-week ATM PE |
| [short_synthetic_future.js](strategies/bearish/code/short_synthetic_future.js) | **Short Synthetic Future** | SELL ATM CE + BUY ATM PE |
| [put_ratio_back_spread.js](strategies/bearish/code/put_ratio_back_spread.js) | **Put Ratio Back Spread** | SELL 1× ATM PE + BUY 2× ATM-1 PE |
| [risk_reversal.js](strategies/bearish/code/risk_reversal.js) | **Risk Reversal** | SELL ATM+1 CE + BUY ATM-1 PE |

#### [Neutral](strategies/neutral/)

| File | Strategy | Legs |
|------|----------|------|
| [short_straddle.js](strategies/neutral/code/short_straddle.js) | **Short Straddle** | SELL ATM CE + SELL ATM PE |
| [short_strangle.js](strategies/neutral/code/short_strangle.js) | **Short Strangle** | SELL ATM+1 CE + SELL ATM-1 PE |
| [iron_butterfly.js](strategies/neutral/code/iron_butterfly.js) | **Iron Butterfly** | SELL ATM CE + SELL ATM PE + BUY ATM+2 CE + BUY ATM-2 PE |
| [batman.js](strategies/neutral/code/batman.js) | **Batman** | BUY ATM CE + SELL 2× ATM+1 CE + BUY ATM+2 CE + BUY ATM PE + SELL 2× ATM-1 PE + BUY ATM-2 PE |
| [short_iron_condor.js](strategies/neutral/code/short_iron_condor.js) | **Short Iron Condor** | SELL ATM+1 CE + BUY ATM+2 CE + SELL ATM-1 PE + BUY ATM-2 PE |

#### [Others](strategies/others/)

| File | Strategy | Legs |
|------|----------|------|
| [long_straddle.js](strategies/others/code/long_straddle.js) | **Long Straddle** | BUY ATM CE + BUY ATM PE |
| [long_strangle.js](strategies/others/code/long_strangle.js) | **Long Strangle** | BUY ATM+1 CE + BUY ATM-1 PE |
| [call_ratio_spread.js](strategies/others/code/call_ratio_spread.js) | **Call Ratio Spread** | BUY 1× ATM CE + SELL 2× ATM+1 CE |
| [put_ratio_spread.js](strategies/others/code/put_ratio_spread.js) | **Put Ratio Spread** | BUY 1× ATM PE + SELL 2× ATM-1 PE |
| [long_iron_butterfly.js](strategies/others/code/long_iron_butterfly.js) | **Long Iron Butterfly** | BUY ATM CE + BUY ATM PE + SELL ATM+2 CE + SELL ATM-2 PE |
| [long_iron_condor.js](strategies/others/code/long_iron_condor.js) | **Long Iron Condor** | BUY ATM+1 CE + SELL ATM+2 CE + BUY ATM-1 PE + SELL ATM-2 PE |
| [strip.js](strategies/others/code/strip.js) | **Strip** | BUY 1× ATM CE + BUY 2× ATM PE |
| [strap.js](strategies/others/code/strap.js) | **Strap** | BUY 2× ATM CE + BUY 1× ATM PE |

## Documentation

- [Upstox API Documentation](https://upstox.com/developer/api-documentation)
- [Upstox Node.js SDK (npm)](https://www.npmjs.com/package/upstox-js-sdk)
- [Upstox Node.js SDK (GitHub)](https://github.com/upstox/upstox-nodejs)
