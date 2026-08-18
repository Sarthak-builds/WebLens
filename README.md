# WebLens

A web analysis dashboard for evaluating website performance, accessibility, SEO, and implementation quality through Google PageSpeed Insights.

## Overview

WebLens provides an interface for submitting a URL and transforming PageSpeed Insights results into a structured, visual analysis.

Instead of exposing the raw PageSpeed response directly, the application maps performance data into domain-specific dashboard components for easier interpretation.

## Analysis Pipeline

```text
URL
 |
 v
Google PageSpeed Insights
 |
 v
Performance / Accessibility / SEO / Best Practices
 |
 v
Application State
 |
 v
Metric Processing
 |
 v
Dashboard
