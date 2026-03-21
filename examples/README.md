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
| [buy_call.js](strategies/bullish/code/buy_call.js) | [**Buy Call**](strategies/bullish/README.md#buy-call--codebuy_calljs) | BUY ATM CE |
| [sell_put.js](strategies/bullish/code/sell_put.js) | [**Sell Put**](strategies/bullish/README.md#sell-put--codesell_putjs) | SELL ATM PE |
| [bull_call_spread.js](strategies/bullish/code/bull_call_spread.js) | [**Bull Call Spread**](strategies/bullish/README.md#bull-call-spread--codebull_call_spreadjs) | BUY ATM CE + SELL ATM+1 CE |
| [bull_put_spread.js](strategies/bullish/code/bull_put_spread.js) | [**Bull Put Spread**](strategies/bullish/README.md#bull-put-spread--codebull_put_spreadjs) | SELL ATM PE + BUY ATM-1 PE |
| [bull_butterfly.js](strategies/bullish/code/bull_butterfly.js) | [**Bull Butterfly**](strategies/bullish/README.md#bull-butterfly--codebull_butterflyjs) | BUY ATM CE + SELL 2× ATM+1 CE + BUY ATM+2 CE |
| [bull_condor.js](strategies/bullish/code/bull_condor.js) | [**Bull Condor**](strategies/bullish/README.md#bull-condor--codebull_condorjs) | BUY ATM CE + SELL ATM+1 CE + SELL ATM+2 CE + BUY ATM+3 CE |
| [long_calendar_call.js](strategies/bullish/code/long_calendar_call.js) | [**Long Calendar with Calls**](strategies/bullish/README.md#long-calendar-with-calls--codelong_calendar_calljs) | SELL current-week ATM CE + BUY next-week ATM CE |
| [long_synthetic_future.js](strategies/bullish/code/long_synthetic_future.js) | [**Long Synthetic Future**](strategies/bullish/README.md#long-synthetic-future--codelong_synthetic_futurejs) | BUY ATM CE + SELL ATM PE |
| [call_ratio_back_spread.js](strategies/bullish/code/call_ratio_back_spread.js) | [**Call Ratio Back Spread**](strategies/bullish/README.md#call-ratio-back-spread--codecall_ratio_back_spreadjs) | SELL 1× ATM CE + BUY 2× ATM+1 CE |
| [range_forward.js](strategies/bullish/code/range_forward.js) | [**Range Forward**](strategies/bullish/README.md#range-forward--coderange_forwardjs) | SELL ATM-1 PE + BUY ATM+1 CE |

#### [Bearish](strategies/bearish/)

| File | Strategy | Legs |
|------|----------|------|
| [buy_put.js](strategies/bearish/code/buy_put.js) | [**Buy Put**](strategies/bearish/README.md#buy-put--codebuy_putjs) | BUY ATM PE |
| [sell_call.js](strategies/bearish/code/sell_call.js) | [**Sell Call**](strategies/bearish/README.md#sell-call--codesell_calljs) | SELL ATM CE |
| [bear_call_spread.js](strategies/bearish/code/bear_call_spread.js) | [**Bear Call Spread**](strategies/bearish/README.md#bear-call-spread--codebear_call_spreadjs) | SELL ATM CE + BUY ATM+1 CE |
| [bear_put_spread.js](strategies/bearish/code/bear_put_spread.js) | [**Bear Put Spread**](strategies/bearish/README.md#bear-put-spread--codebear_put_spreadjs) | BUY ATM PE + SELL ATM-1 PE |
| [bear_butterfly.js](strategies/bearish/code/bear_butterfly.js) | [**Bear Butterfly**](strategies/bearish/README.md#bear-butterfly--codebear_butterflyjs) | BUY ATM PE + SELL 2× ATM-1 PE + BUY ATM-2 PE |
| [bear_condor.js](strategies/bearish/code/bear_condor.js) | [**Bear Condor**](strategies/bearish/README.md#bear-condor--codebear_condorjs) | BUY ATM PE + SELL ATM-1 PE + SELL ATM-2 PE + BUY ATM-3 PE |
| [long_calendar_put.js](strategies/bearish/code/long_calendar_put.js) | [**Long Calendar with Puts**](strategies/bearish/README.md#long-calendar-with-puts--codelong_calendar_putjs) | SELL current-week ATM PE + BUY next-week ATM PE |
| [short_synthetic_future.js](strategies/bearish/code/short_synthetic_future.js) | [**Short Synthetic Future**](strategies/bearish/README.md#short-synthetic-future--codeshort_synthetic_futurejs) | SELL ATM CE + BUY ATM PE |
| [put_ratio_back_spread.js](strategies/bearish/code/put_ratio_back_spread.js) | [**Put Ratio Back Spread**](strategies/bearish/README.md#put-ratio-back-spread--codeput_ratio_back_spreadjs) | SELL 1× ATM PE + BUY 2× ATM-1 PE |
| [risk_reversal.js](strategies/bearish/code/risk_reversal.js) | [**Risk Reversal**](strategies/bearish/README.md#risk-reversal--coderisk_reversaljs) | SELL ATM+1 CE + BUY ATM-1 PE |

#### [Neutral](strategies/neutral/)

| File | Strategy | Legs |
|------|----------|------|
| [short_straddle.js](strategies/neutral/code/short_straddle.js) | [**Short Straddle**](strategies/neutral/README.md#short-straddle--codeshort_straddlejs) | SELL ATM CE + SELL ATM PE |
| [short_strangle.js](strategies/neutral/code/short_strangle.js) | [**Short Strangle**](strategies/neutral/README.md#short-strangle--codeshort_stranglejs) | SELL ATM+1 CE + SELL ATM-1 PE |
| [iron_butterfly.js](strategies/neutral/code/iron_butterfly.js) | [**Iron Butterfly**](strategies/neutral/README.md#iron-butterfly--codeiron_butterflyjs) | SELL ATM CE + SELL ATM PE + BUY ATM+2 CE + BUY ATM-2 PE |
| [batman.js](strategies/neutral/code/batman.js) | [**Batman**](strategies/neutral/README.md#batman--codebatmanjs) | BUY ATM CE + SELL 2× ATM+1 CE + BUY ATM+2 CE + BUY ATM PE + SELL 2× ATM-1 PE + BUY ATM-2 PE |
| [short_iron_condor.js](strategies/neutral/code/short_iron_condor.js) | [**Short Iron Condor**](strategies/neutral/README.md#short-iron-condor--codeshort_iron_condorjs) | SELL ATM+1 CE + BUY ATM+2 CE + SELL ATM-1 PE + BUY ATM-2 PE |

#### [Others](strategies/others/)

| File | Strategy | Legs |
|------|----------|------|
| [long_straddle.js](strategies/others/code/long_straddle.js) | [**Long Straddle**](strategies/others/README.md#long-straddle--codelong_straddlejs) | BUY ATM CE + BUY ATM PE |
| [long_strangle.js](strategies/others/code/long_strangle.js) | [**Long Strangle**](strategies/others/README.md#long-strangle--codelong_stranglejs) | BUY ATM+1 CE + BUY ATM-1 PE |
| [call_ratio_spread.js](strategies/others/code/call_ratio_spread.js) | [**Call Ratio Spread**](strategies/others/README.md#call-ratio-spread--codecall_ratio_spreadjs) | BUY 1× ATM CE + SELL 2× ATM+1 CE |
| [put_ratio_spread.js](strategies/others/code/put_ratio_spread.js) | [**Put Ratio Spread**](strategies/others/README.md#put-ratio-spread--codeput_ratio_spreadjs) | BUY 1× ATM PE + SELL 2× ATM-1 PE |
| [long_iron_butterfly.js](strategies/others/code/long_iron_butterfly.js) | [**Long Iron Butterfly**](strategies/others/README.md#long-iron-butterfly--codelong_iron_butterflyjs) | BUY ATM CE + BUY ATM PE + SELL ATM+2 CE + SELL ATM-2 PE |
| [long_iron_condor.js](strategies/others/code/long_iron_condor.js) | [**Long Iron Condor**](strategies/others/README.md#long-iron-condor--codelong_iron_condorjs) | BUY ATM+1 CE + SELL ATM+2 CE + BUY ATM-1 PE + SELL ATM-2 PE |
| [strip.js](strategies/others/code/strip.js) | [**Strip**](strategies/others/README.md#strip--codestripjs) | BUY 1× ATM CE + BUY 2× ATM PE |
| [strap.js](strategies/others/code/strap.js) | [**Strap**](strategies/others/README.md#strap--codestrapjs) | BUY 2× ATM CE + BUY 1× ATM PE |

## Documentation

- [Upstox API Documentation](https://upstox.com/developer/api-documentation)
- [Upstox Node.js SDK (npm)](https://www.npmjs.com/package/upstox-js-sdk)
- [Upstox Node.js SDK (GitHub)](https://github.com/upstox/upstox-nodejs)
