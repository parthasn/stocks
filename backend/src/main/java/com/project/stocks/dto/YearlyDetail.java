package com.project.stocks.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class YearlyDetail {

    @JsonProperty("unit")
    private Unit unit;

    @JsonProperty("data")
    private List<YearInfo> yearInfo = new ArrayList<>();

    @JsonProperty("TTM")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer ttm;

    public YearlyDetail(Unit unit, List<YearInfo> yearInfo, Integer ttm) {
        this.unit = unit;
        this.yearInfo = yearInfo;
        this.ttm = ttm;
    }

    public YearlyDetail(Unit unit, List<YearInfo> yearInfo) {
        this.unit = unit;
        this.yearInfo = yearInfo;
    }

    public YearlyDetail() {
    }

    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    public List<YearInfo> getYearInfo() {
        return yearInfo;
    }

    public void setYearInfo(List<YearInfo> yearInfo) {
        this.yearInfo = yearInfo;
    }

    public Integer getTtm() {
        return ttm;
    }

    public void setTtm(Integer ttm) {
        this.ttm = ttm;
    }

    @Override
    public String toString() {
        if(ttm == null){
            return "{" +
                    "unit='" + unit.toString() + '\'' +
                    ", data=" + yearInfo +
                    '}';
        }
        return "{" +
        "unit='" + unit.toString() + '\'' +
        "TTM='" + ttm.toString() + '\'' +
        ", data=" + yearInfo +
        '}';
    }
}
