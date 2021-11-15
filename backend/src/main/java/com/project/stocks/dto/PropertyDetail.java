package com.project.stocks.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PropertyDetail {

    @JsonProperty("unit")
    public String unit;

    @JsonProperty("value")
    private String value;

    public PropertyDetail(String unit, String value) {
        this.unit = unit;
        this.value = value;
    }

    public PropertyDetail() {
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "{" +
                "unit='" + unit + '\'' +
                ", value='" + value + '\'' +
                '}';
    }
}
