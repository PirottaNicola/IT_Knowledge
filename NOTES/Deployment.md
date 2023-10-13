# Top 5 most-used deployment strategies

- ### Big Bang Deployment
  **Deploy the entire application at once**. This is the simplest deployment strategy, but it has the highest risk of failure. If a problem occurs, it will affect the entire application. This strategy is **best suited for small applications** that are not critical to the business.
- ### Rolling Deployment
  **Deploy to a small subset of servers**, then gradually increase the number of servers in each deployment until all servers are updated. If a problem occurs, it will affect only a small number of servers. This strategy is **best suited for large applications** that are critical to the business. It prevents downtime and allows for easy rollback, but it requires a load balancer and it's a slower deployment strategy.
- ### Blue/Green Deployment
  **Deploy to a separate environment** (blue environment) that is identical to the production environment (green environment). Once the deployment is complete, switch the router/load balancer from the green environment to the blue environment. This strategy is **best suited for large applications** that are critical to the business. It prevents downtime and allows for easy rollback, but it requires a load balancer and introduce the changes for all users simultaneously.
- ### Canary Deployment
  **Deploy to a small subset of servers**, then if everything is good, gradually increase the number of servers in each deployment until all servers are updated. Requires automated testing for the subsets of servers (canaries) to ensure that the new version is working properly.
- ### Feature Toggle
  This is more of a development strategy than a deployment strategy. **Deploy the new feature to production, but hide it from users**, and then toggle it for selected users/group of users to test the new feature. Great for A/B testing and for gradually rolling out a new feature to all users. Requires a feature toggle mechanism. Makes the system increasingly complex, especially if we do not delete old code / unused features.
