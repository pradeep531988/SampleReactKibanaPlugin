import { resolve } from 'path';
import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'alerts-plugin',
    uiExports: {
      
      app: {
        title: 'Alerting',
        description: 'Plugin alows the normal users to create watchers and monitor application',
        main: 'plugins/alerts-plugin/app'
      },
      
      
      translations: [
        resolve(__dirname, './translations/es.json')
      ],
      
      
      hacks: [
        'plugins/alerts-plugin/hack'
      ]
      
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    
    init(server, options) {
      // Add server routes and initialize the plugin here
      exampleRoute(server);
    }
    

  });
};
