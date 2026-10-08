#!/usr/bin/env python3
"""Headless-Chromium screenshots of a running preview server (default http://127.0.0.1:4321).

Usage: npm run preview  (in another terminal), then: python3 scripts/screenshots.py [base_url]
"""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = (sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:4321").rstrip("/")
OUT = Path(__file__).resolve().parent.parent / "screenshots"
OUT.mkdir(exist_ok=True)

SHOTS = [
    ("01_landing_dark.png", "/", "dark", True),
    ("02_landing_light.png", "/", "light", False),
    ("03_playbook_ghg_inventory.png", "/playbooks/ghg-inventory-scope-3/", "dark", False),
    ("04_playbook_supplier_extraction_prompts.png", "/playbooks/supplier-data-extraction/#prompts", "light", False),
    ("05_regulatory_tracker.png", "/reference/regulatory-tracker/", "dark", False),
    ("06_ideas_inbox.png", "/ideas/inbox/", "light", False),
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    for name, path, theme, full in SHOTS:
        ctx = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=1, color_scheme=theme)
        ctx.add_init_script(f"localStorage.setItem('starlight-theme', '{theme}')")
        page = ctx.new_page()
        page.goto(BASE + path, wait_until="networkidle")
        page.wait_for_timeout(400)
        page.screenshot(path=str(OUT / name), full_page=full)
        print("saved", OUT / name)
        ctx.close()
    # Search in action
    ctx = browser.new_context(viewport={"width": 1440, "height": 900}, color_scheme="dark")
    page = ctx.new_page()
    page.goto(BASE + "/start-here/what-ai-first-means/", wait_until="networkidle")
    page.click("button[data-open-modal]")
    page.wait_for_selector("dialog[open] input", timeout=5000)
    page.fill("dialog[open] input", "tie-out")
    page.wait_for_timeout(1500)
    page.screenshot(path=str(OUT / "07_search.png"))
    print("saved", OUT / "07_search.png")
    browser.close()
