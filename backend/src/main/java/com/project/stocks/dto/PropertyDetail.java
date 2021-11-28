package com.project.stocks.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PropertyDetail {

    @JsonProperty("unit")
    public Unit unit;

    @JsonProperty("value")
    private Integer value;

    public PropertyDetail(Unit unit, Integer value) {
        this.unit = unit;
        this.value = value;
    }

    public PropertyDetail() {
    }

    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "{" +
                "unit='" + unit.toString() + '\'' +
                ", value='" + value + '\'' +
                '}';
    }
}
