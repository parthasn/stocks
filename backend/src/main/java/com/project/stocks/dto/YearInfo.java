package com.project.stocks.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class YearInfo {

    @JsonProperty("year")
    private String year;
    @JsonProperty("value")
    private String value;

    public YearInfo(String year, String value) {
        this.year = year;
        this.value = value;
    }

    public YearInfo() {
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "YearInfo{" +
                "year='" + year + '\'' +
                ", value='" + value + '\'' +
                '}';
    }
}
