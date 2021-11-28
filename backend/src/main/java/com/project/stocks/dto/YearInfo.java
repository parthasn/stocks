package com.project.stocks.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class YearInfo {

    @JsonProperty("year")
    private Integer year;

    @JsonProperty("value")
    private Integer value;

    public YearInfo(Integer year, Integer value) {
        this.year = year;
        this.value = value;
    }

    public YearInfo() {
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public String toString() {
        return "{" +
                "year='" + year + '\'' +
                ", value='" + value + '\'' +
                '}';
    }
}
