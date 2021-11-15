package com.project.stocks.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class YearlyDetail {

    @JsonProperty("unit")
    private String unit;

    @JsonProperty("data")
    private List<YearInfo> yearInfo = new ArrayList<>();

    public YearlyDetail(String unit, List<YearInfo> yearInfo) {
        this.unit = unit;
        this.yearInfo = yearInfo;
    }

    public YearlyDetail() {
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public List<YearInfo> getYearInfo() {
        return yearInfo;
    }

    public void setYearInfo(List<YearInfo> yearInfo) {
        this.yearInfo = yearInfo;
    }

    @Override
    public String toString() {
        return "{" +
                "unit='" + unit + '\'' +
                ", data=" + yearInfo +
                '}';
    }
}
