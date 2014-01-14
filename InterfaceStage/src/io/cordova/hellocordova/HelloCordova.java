/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package io.cordova.hellocordova;

import android.os.Bundle;

import org.apache.cordova.*;



import android.os.Bundle;
import android.app.Activity;
import android.util.Log;
import android.view.Menu;



public class HelloCordova extends CordovaActivity 
{
	private final static int PLAY_SERVICES_RESOLUTION_REQUEST = 9000;
    @Override
	public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
     

        	
	  super.loadUrl("file:///android_asset/www/index.html");
	 
    }
	protected void onResume() {
		super.onResume();
		
	        
		
	}

}

