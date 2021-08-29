package com.project.stocks.repository;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.stocks.dto.Stock;
import org.springframework.stereotype.Component;

import java.io.*;
import java.util.Scanner;

@Component
public class StockRepository {

    public void getStockDetails(String stockId) {
        final AmazonS3 s3 = AmazonS3ClientBuilder.standard().withRegion(Regions.US_EAST_1).build();
        try {
            String key_name = "data/TCS";
            S3Object o = s3.getObject("stock-ui-bucket", key_name);
            S3ObjectInputStream s3is = o.getObjectContent();
            FileOutputStream fos = new FileOutputStream(new File("TCS"));
            byte[] read_buf = new byte[1024];
            int read_len = 0;

            Scanner s = new Scanner(s3is);
            StringBuilder sb = new StringBuilder();
            while(s.hasNext()){
                sb.append(s.next());
            }
            String result = sb.toString();
//            System.out.println(result);

            ObjectMapper mapper = new ObjectMapper();
            Stock stock = mapper.readValue(result, Stock.class);
            System.out.println(stock);


            while ((read_len = s3is.read(read_buf)) > 0) {
                fos.write(read_buf, 0, read_len);
            }
            s3is.close();
            fos.close();
        } catch (AmazonServiceException e) {
            System.err.println(e.getErrorMessage());
            System.exit(1);
        } catch (FileNotFoundException e) {
            System.err.println(e.getMessage());
            System.exit(1);
        } catch (IOException e) {
            System.err.println(e.getMessage());
            System.exit(1);
        }
    }

}